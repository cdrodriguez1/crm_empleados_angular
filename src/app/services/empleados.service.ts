import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/empleado.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  baseUrl: string = 'https://crm-empleados.onrender.com/api/empleados'

  constructor(private httpClient: HttpClient) { }

  // Crear los diferentes elementos que me permitan CRUD crear, leer, actualizar
  // y borrar CREATE, READ, UPDATE, DELETE

  //GET - leer - Read
  //POST - insert - Create
  //PUT / PATH - actualizar - Update
  //DELETE - borrar - Delete

  //getAll trae todos los empleados
  getAll(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.baseUrl);
  }

  //getById trae la inf de un empleado por _id
  getById(_id: string): Observable<Empleado> {
    return this.httpClient.get<Empleado>(this.baseUrl + "/" + _id);
  }

  // inser, inserta un nuevo empleado dentro de las lista (BBDD)
  insert(nuevoEmpleado: Empleado): Observable<Empleado> {
    return this.httpClient.post<Empleado>(this.baseUrl, nuevoEmpleado);
  }

  delete(_id: string): Observable<Empleado> {
    return this.httpClient.delete<Empleado>(this.baseUrl + "/" + _id);
  }

  update(empleadoActualizado: Empleado): Observable<Empleado> {
    return this.httpClient.put<Empleado>(this.baseUrl + "/" + empleadoActualizado._id, empleadoActualizado)
  }
}
