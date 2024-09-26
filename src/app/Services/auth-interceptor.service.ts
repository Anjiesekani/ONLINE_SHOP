import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginService } from './login-service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // console.log('AuthINTERCEPTOR Interceptor called');
    const modifiedReq = req.clone({
      headers: req.headers.append('auth', 'abxy'),
    });
    return next.handle(modifiedReq).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          // console.log('Response has arrived.Response data: ');
          // console.log(event.body);
        }
      })
    );
  }
}
