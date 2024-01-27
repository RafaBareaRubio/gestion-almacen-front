import  swal  from 'sweetalert2';
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../proveedor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-proveedor',
  templateUrl: './actualizar-proveedor.component.html',
  styleUrls: ['./actualizar-proveedor.component.css']
})
export class ActualizarProveedorComponent implements OnInit {

  id:number;
  proveedor:Proveedor = new Proveedor();
  constructor(private proveedorService:ProveedorService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.proveedorService.obtenerProveedorPorId(this.id).subscribe(dato =>{
      this.proveedor = dato;
    },error => console.log(error));
  }

  irAlaListaDeProveedors(){
    this.router.navigate(['/proveedores']);
    swal('Proveedor actualizado',`El proveedor ${this.proveedor.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.proveedorService.actualizarProveedor(this.id,this.proveedor).subscribe(dato => {
      this.irAlaListaDeProveedors();
    },error => console.log(error));
  }
}
