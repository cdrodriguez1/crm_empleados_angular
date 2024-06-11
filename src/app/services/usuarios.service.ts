import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl = 'https://crm-empleados.onrender.com/api/usuarios/login'

  constructor(private httpClient: HttpClient) { }

  login(user: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, user)
  }
}
