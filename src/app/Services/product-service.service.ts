import { inject, Injectable, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders,
} from '@angular/common/http';
import { Product } from '../Product/Model/model';
import { catchError, map, Observable, Subject, tap, throwError } from 'rxjs';
import { LoginService } from './login-service';
import { environment } from '../../environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private loginService: LoginService) {}
  private firebaseDbUrl = environment.firebaseDbUrl;

  errorSubject = new Subject<HttpErrorResponse>();

  sendFormData(data: Product) {
    const header = new HttpHeaders({ 'my-header': 'hello-world' });
    return this.http
      .post<{ name: string }>(`${this.firebaseDbUrl}/task.json`, data, {
        headers: header,
      })
      .pipe(
        catchError((err) => {
          const errorObj = {
            statusCode: err.status,
            errorMessage: err.message,
            dateTime: new Date(),
          };
          this.loginService.logError(errorObj);
          return throwError(() => err);
        })
      )
      .subscribe({
        error: (err) => this.errorSubject.next(err),
      });
  }
  fetchAllProducts() {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http
      .get<{ [key: string]: { Product } }>(`${this.firebaseDbUrl}/task.json`, {
        headers: headers,
        observe: 'body',
      })
      .pipe(
        map((response) => {
          let tasks = [];
          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              tasks.push({ ...response[key], ID: key });
            }
          }
          return tasks;
        }),
        catchError((err) => {
          const errorObj = {
            statusCode: err.status,
            errorMessage: err.message,
            dateTime: new Date(),
          };
          this.loginService.logError(errorObj);
          return throwError(() => err);
        })
      );
  }

  DeleteProduct(id: string) {
    return this.http
      .delete(`${this.firebaseDbUrl}/task/${id}.json`, { observe: 'events' })
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            alert('Deleted Successful');
          }
        }),
        catchError((err) => {
          const errorObj = {
            statusCode: err.status,
            errorMessage: err.message,
            dateTime: new Date(),
          };
          this.loginService.logError(errorObj);
          return throwError(() => err);
        })
      );
    // .subscribe({
    //   error: (err) => this.errorSubject.next(err),
    // });
  }

  updateProduct(productId: string, updatedProduct: any): Observable<any> {
    console.log(productId);
    const url = `${this.firebaseDbUrl}/task/${productId}.json`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, updatedProduct, { headers });
  }

  fetchProductsByCategory(category: string): Observable<Product[]> {
    return this.http
      .get<{ [key: string]: Product }>(`${this.firebaseDbUrl}/products.json`)
      .pipe(
        map((response) => {
          const products: Product[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              const product = { ...response[key], id: key };
              if (product.category === category) {
                products.push(product);
              }
            }
          }
          return products;
        }),
        catchError((err) => {
          const errorObj = {
            statusCode: err.status,
            errorMessage: err.message,
            dateTime: new Date(),
          };
          this.loginService.logError(errorObj);
          return throwError(() => err);
        })
      );
  }
}
