import  swal  from 'sweetalert2';
import { ProveedorService } from '../proveedor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proveedor } from '../proveedor';

@Component({
  selector: 'app-proveedor-detalles',
  templateUrl: './proveedor-detalle.component.html',
  styleUrls: ['./proveedor-detalle.component.css']
})
export class ProveedorDetallesComponent implements OnInit {

  id:number;
  proveedor:Proveedor;
  constructor(private route:ActivatedRoute,private proveedorServicio:ProveedorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.proveedor = new Proveedor();
    this.proveedorServicio.obtenerProveedorPorId(this.id).subscribe(dato => {
      this.proveedor = dato;
      swal(`Detalles del proveedor ${this.proveedor.nombre}`);
    });
  }

}
