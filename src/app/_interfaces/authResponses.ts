export interface UsersResponse{
    "ok": boolean;
    "usuarios": Usuario[];
    "total": number;
}

export interface LoginResponse {
    "ok": boolean;
    "token": string;
    "user": Usuario 
}

export interface Usuario {
    "role": string;
    "nombre": string;
    "email": string;
    "uid": string;
}

