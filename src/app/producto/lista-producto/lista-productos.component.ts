import  swal  from 'sweetalert2';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos:Producto[];

  constructor(private productoServicio:ProductoService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  actualizarProducto(id:number){
    this.router.navigate(['actualizar-producto',id]);
  }

  avisoProducto(){

  }

  private obtenerProductos(){
    this.productoServicio.obtenerListaDeProductos().subscribe(dato => {
      this.productos = dato;
    });
  }

    eliminarProducto(id:number){
      swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar al producto",
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
          this.productoServicio.eliminarProducto(id).subscribe(dato => {
            console.log(dato);
            this.obtenerProductos();
            swal(
              'Producto eliminado',
              'El producto ha sido eliminado con exito',
              'success'
            )
          })
        }
      })
    }


  verDetallesDelProducto(id:number){
    this.router.navigate(['producto-detalles',id]);
  }

    //Filtro
    aplicarFiltro() {
      // this.rutasFiltradas = this.rutas.filter((ruta) =>
      //   ruta.estado.toLowerCase().includes(this.filtro.toLowerCase())
      // );
    }
}
