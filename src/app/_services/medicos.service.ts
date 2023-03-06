import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http: HttpClient) { }

  getMedicos(){
    return this.http.get<any>(`${environment.apiUrl}/api/medicos`)
  }

  getMedico(id:string){
    return this.http.get<any>(`${environment.apiUrl}/api/medicos/${id}`)
  }

  addMedico(nombre:string,especialidad:string,telefono:string,aceptaNuevos:boolean){
    return this.http.post<any>(`${environment.apiUrl}/api/medicos`,{nombre,especialidad,telefono,aceptaNuevos})
  }
}
