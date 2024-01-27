import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ruta } from './ruta';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  obtenerRutas() {
    throw new Error('Method not implemented.');
  }

  //Esta URL obtiene el listado de todos los rutas en el backend
  private baseURL = "http://localhost:8080/api/v1/rutas";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los rutas
  obtenerListaDeRutas():Observable<Ruta[]>{
    return this.httpClient.get<Ruta[]>(`${this.baseURL}`);
  }

  //este metodo nos sirve para registrar un ruta
  registrarRuta(ruta:Ruta) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,ruta);
  }

  //este metodo sirve para actualizar el ruta
  actualizarRuta(id:number,ruta:Ruta) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,ruta);
  }

  //este metodo sirve para obtener o buscar un ruta
  obtenerRutaPorId(id:number):Observable<Ruta>{
    return this.httpClient.get<Ruta>(`${this.baseURL}/${id}`);
  }

  eliminarRuta(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
