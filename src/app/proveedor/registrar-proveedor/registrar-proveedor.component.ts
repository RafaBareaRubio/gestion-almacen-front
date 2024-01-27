import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../proveedor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-proveedor',
  templateUrl: './registrar-proveedor.component.html',
  styleUrls: ['./registrar-proveedor.component.css']
})
export class RegistrarProveedorComponent implements OnInit {

  proveedor : Proveedor = new Proveedor();
  constructor(private proveedorServicio:ProveedorService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarProveedor(){
    this.proveedorServicio.registrarProveedor(this.proveedor).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeProveedors();
    },error => console.log(error));
  }

  irALaListaDeProveedors(){
    this.router.navigate(['/proveedores']);
    swal('Proveedor registrado',`El proveedor ${this.proveedor.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarProveedor();
  }
}
