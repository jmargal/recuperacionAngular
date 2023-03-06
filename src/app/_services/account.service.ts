import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { LoginResponse, UsersResponse, Usuario } from '../_interfaces/authResponses';
import { EMPTY } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class AccountService {

    constructor(
        private router: Router,
        private http: HttpClient,
        private cookieSvc:CookieService
    ) {}
    public get token(): string {
      const token = this.cookieSvc.get('token');
      if (token){
          let parsedToken = JSON.parse(token);
          return parsedToken
      }
      return ''

    }
    public get userValue(): Usuario|null {
      const user = this.cookieSvc.get('user');
        if (user){
            let parsedUser = JSON.parse(user);
            return parsedUser
        }
        return null
    }

    login(email: string, password: string) {
      return this.http.post<LoginResponse>(`${environment.apiUrl}/api/login`, { email, password })
      .pipe(map(user => {
          this.cookieSvc.set('user', JSON.stringify(user.user));
          this.cookieSvc.set('token', JSON.stringify(user.token));

          return user;
      }));
    }

    logout() {
      this.cookieSvc.delete('user');
      this.cookieSvc.delete('token');
      this.router.navigate(['']);

    }

    // register(user: User) {
    //     return this.http.post(`${environment.apiUrl}/api/users`, user);
    // }

    getAll() {
        return this.http.get<UsersResponse>(`${environment.apiUrl}/api/usuarios`);
    }

}
