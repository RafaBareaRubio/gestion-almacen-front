import  swal  from 'sweetalert2';
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../proveedor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css']
})
export class ListaProveedoresComponent implements OnInit {

  proveedores:Proveedor[];

  constructor(private proveedorServicio:ProveedorService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerProveedores();
  }

  actualizarProveedor(id:number){
    this.router.navigate(['actualizar-proveedor',id]);
  }

  private obtenerProveedores(){
    this.proveedorServicio.obtenerListaDeProveedores().subscribe(dato => {
      this.proveedores = dato;
    });
  }

    eliminarProveedor(id:number){
      swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar al proveedor",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , elimínalo',
        cancelButtonText: 'No, cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true
      }).then((result) => {
        if(result.value){
          this.proveedorServicio.eliminarProveedor(id).subscribe(dato => {
            console.log(dato);
            this.obtenerProveedores();
            swal(
              'Proveedor eliminado',
              'El proveedor ha sido eliminado con exito',
              'success'
            )
          })
        }
      })
    }


  verDetallesDelProveedor(id:number){
    this.router.navigate(['proveedor-detalles',id]);
  }

    //Filtro
    aplicarFiltro() {
      // this.rutasFiltradas = this.rutas.filter((ruta) =>
      //   ruta.estado.toLowerCase().includes(this.filtro.toLowerCase())
      // );
    }
}
