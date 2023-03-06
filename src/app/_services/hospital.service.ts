import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  getHospitales():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/api/hospitales`)
  }

  addHospital(nombre:string,direccion:string,tipo:string){
    return this.http.post<any>(`${environment.apiUrl}/api/hospitales`,{nombre,direccion,tipo})
  }
}
