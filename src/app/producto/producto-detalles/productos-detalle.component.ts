import  swal  from 'sweetalert2';
import { ProductoService } from '../producto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetallesComponent implements OnInit {

  id:number;
  producto:Producto;
  constructor(private route:ActivatedRoute,private productoServicio:ProductoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.producto = new Producto();
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(dato => {
      this.producto = dato;
      swal(`Detalles del producto ${this.producto.nombre}`);
    });
  }

}
