import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private router:Router,private accountSvc:AccountService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Coge el token actual
    const token:any = this.accountSvc.token;
    let request = req;
    //Si hay token CLONA la req y le pone una nueva cabecera con el token
    if (token) {
      request = req.clone({
        setHeaders: {
         "x-token": token
        },
      });
    }
    //La pasa para que siga el programa
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          console.log(err);
          this.router.navigate(['/']);
        }

        return throwError(err);
      })
    );
  }
}
