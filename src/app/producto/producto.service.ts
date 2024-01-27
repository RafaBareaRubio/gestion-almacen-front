import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';
// import { QRCodeModule } from 'angularx-qrcode';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //Esta URL obtiene el listado de todos los productos en el backend
  private baseURL = "http://localhost:8080/api/v1/productos";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los productos
  obtenerListaDeProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }

  //este metodo nos sirve para registrar un producto
  registrarProducto(producto:Producto) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,producto);
  }

  //este metodo sirve para actualizar el producto
  actualizarProducto(id:number,producto:Producto) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,producto);
  }

  //este metodo sirve para obtener o buscar un producto
  obtenerProductoPorId(id:number):Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.baseURL}/${id}`);
  }

  eliminarProducto(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  // Añadir producto con QR
  // generateQRCode(productInfoQR: string): string {
    // Lógica para generar el código QR con la información del producto
  //   return productInfoQR;
  // }
}
