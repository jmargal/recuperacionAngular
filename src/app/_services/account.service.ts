import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { LoginResponse, UsersResponse, Usuario } from '../_interfaces/authResponses';
import { EMPTY } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountService {
    
    constructor(
        private router: Router,
        private http: HttpClient
    ) {}
    public get token(): string {
        return ''
        
    }
    public get userValue(): Usuario|null {
        
        return null
    }

    login(correo: string, password: string) {

        //hacemos login contra la api y guardamos el token y el usuario en las cookies
    }

    logout() {
        // eliminamos el usuario de las cookies y redirigimos al dashboard
        
    }

    // register(user: User) {
    //     return this.http.post(`${environment.apiUrl}/api/users`, user);
    // }

    getAll() {
        return this.http.get<UsersResponse>(`${environment.apiUrl}/api/usuarios`);
    }

}