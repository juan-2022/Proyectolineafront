import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  url = 'https://localhost:7081/api/controller/';

  constructor(private http:HttpClient) { }

  Login(datos:any):Observable<any>{
    return this.http.post(`${this.url}IniciarSesion`,datos)
  }
  buscarAlumno(q:any): Observable<any>{
    return this.http.post(`${this.url}BuscarAlumno`,q)
  }
  alumnosxid(id:any):Observable<any>{
    return this.http.post(`${this.url}Alumnoxid`,id)
  }
  materiasxid(id:any):Observable<any>{
    return this.http.post(`${this.url}ConsultaCurso`,id)
  }
}
