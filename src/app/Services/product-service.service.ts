import { inject, Injectable, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders,
} from '@angular/common/http';
import { Product } from '../Model/model';
import { catchError, map, Observable, Subject, tap, throwError } from 'rxjs';
import { LoginService } from './login-service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private loginService: LoginService) {}

  materials = [
    {
      id: 1,
      name: 'PPR Pipes',
      description:
        'High-quality PPR pipes used for hot and cold water systems in residential and commercial buildings.',
      price: 120,
      imageUrl: 'assets/Website  images/bamburi cement.jpg',
      category: 'Plumbing',
      subCategory: 'Pipes',
    },
    {
      id: 2,
      name: 'Dulux Paint',
      description:
        'Premium quality paint for interior and exterior walls, offering excellent coverage and durability.',
      price: 1000,
      imageUrl: '/assets/Website  images/nyumba cement.jpeg',
      category: 'Painting',
      subCategory: 'Interior Paint',
    },
    {
      id: 3,
      name: 'Makita Drill Machine',
      description:
        'Heavy-duty drill machine ideal for construction and DIY projects, known for its durability.',
      price: 15000,
      imageUrl: 'assets/Website  images/powermax cement.jpeg',
      category: 'Tools & Equipment',
      subCategory: 'Drills',
    },
    {
      id: 4,
      name: 'Ceramic Tiles',
      description:
        'Durable and stylish ceramic tiles suitable for both floors and walls, available in various designs.',
      price: 800,
      imageUrl: '/assets/Website  images/download.jpeg',
      category: 'Decor',
      subCategory: 'Flooring',
    },
    {
      id: 5,
      name: 'PVC Pipes',
      description:
        'PVC pipes for efficient water supply and drainage systems in residential and commercial buildings.',
      price: 90,
      imageUrl: 'assets/Website  images/rhino-1.jpg',
      category: 'Plumbing',
      subCategory: 'Pipes',
    },
    {
      id: 6,
      name: 'Crown Paints Emulsion',
      description:
        'High-quality emulsion paint ideal for walls and ceilings, offering a smooth and vibrant finish.',
      price: 900,
      imageUrl: 'assets/Website  images/SAVANNA-CEMENT.jpg',
      category: 'Painting',
      subCategory: 'Interior Paint',
    },
    {
      id: 7,
      name: 'Bosch Angle Grinder',
      description:
        'Versatile angle grinder for cutting, grinding, and polishing tasks, widely used in construction.',
      price: 12000,
      imageUrl: 'assets/Website  images/simba cement.jpeg',
      category: 'Tools & Equipment',
      subCategory: 'Grinders',
    },
    {
      id: 8,
      name: 'Wallpapers',
      description:
        'Stylish wallpapers for enhancing the interior decor of homes and offices, available in various patterns.',
      price: 2500,
      imageUrl: 'assets/Website  images/tembo cement.jpeg',
      category: 'Decor',
      subCategory: 'Wall Coverings',
    },
    {
      id: 9,
      name: 'Flexible Hoses',
      description:
        'Durable flexible hoses for efficient water supply and plumbing connections.',
      price: 300,
      imageUrl: '/assets/Website  images/flexible-hoses.jpg',
      category: 'Plumbing',
      subCategory: 'Hoses',
    },
    {
      id: 10,
      name: 'Plascon Paint',
      description:
        'Weather-resistant paint suitable for exterior walls, offering long-lasting protection.',
      price: 1100,
      imageUrl: '/assets/Website  images/plascon-paint.jpg',
      category: 'Painting',
      subCategory: 'Exterior Paint',
    },
    {
      id: 11,
      name: 'Stanley Tool Kit',
      description:
        'Comprehensive tool kit containing a variety of tools for home repairs and construction projects.',
      price: 8500,
      imageUrl: '/assets/Website  images/stanley-tool-kit.jpg',
      category: 'Tools & Equipment',
      subCategory: 'Tool Kits',
    },
  ];
  errorSubject = new Subject<HttpErrorResponse>();

  sendFormData(data: Product) {
    const header = new HttpHeaders({ 'my-header': 'hello-world' });
    return this.http
      .post<{ name: string }>(
        'https://online-project-cfbc7-default-rtdb.firebaseio.com/task.json',
        data,
        { headers: header }
      )
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
      .get<{ [key: string]: { Product } }>(
        'https://online-project-cfbc7-default-rtdb.firebaseio.com/task.json',
        { headers: headers, observe: 'body' }
      )
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

  // modifyProduct(id: number, patialData: any) {
  //   let url = `https://online-project-cfbc7-default-rtdb.firebaseio.com/task/${id}.json`;
  //   return this.http.patch(url, patialData);
  // }

  DeleteProduct(ID: string) {
    return this.http
      .delete(
        `https://online-project-cfbc7-default-rtdb.firebaseio.com/task/${ID}.json`,
        { observe: 'events' }
      )
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
    const url = `https://online-project-cfbc7-default-rtdb.firebaseio.com/task/${productId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, updatedProduct, { headers });
  }
}
