import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from './proveedor';

@Injectable({
  providedIn: 'root'
})

export class ProveedorService {

  //Esta URL obtiene el listado de todos los proveedores en el backend
  private baseURL = "http://localhost:8080/api/v1/proveedores";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los proveedores
  obtenerListaDeProveedores():Observable<Proveedor[]>{
    return this.httpClient.get<Proveedor[]>(`${this.baseURL}`);
  }

  //este metodo nos sirve para registrar un proveedor
  registrarProveedor(proveedor:Proveedor) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,proveedor);
  }

  //este metodo sirve para actualizar el proveedor
  actualizarProveedor(id:number,proveedor:Proveedor) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,proveedor);
  }

  //este metodo sirve para obtener o buscar un proveedor
  obtenerProveedorPorId(id:number):Observable<Proveedor>{
    return this.httpClient.get<Proveedor>(`${this.baseURL}/${id}`);
  }

  eliminarProveedor(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
