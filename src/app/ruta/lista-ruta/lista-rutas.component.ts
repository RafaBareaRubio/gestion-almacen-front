import  swal  from 'sweetalert2';
import { RutaService } from '../ruta.service';
import { Ruta } from '../ruta';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-rutas',
  templateUrl: './lista-rutas.component.html',
  styleUrls: ['./lista-rutas.component.css']
})
export class ListaRutasComponent implements OnInit {

  rutas:Ruta[];
  rutasFiltradas = []; // Nueva lista para almacenar los datos filtrados
  filtro = '';

  constructor(private rutaServicio:RutaService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerRutas();
  }

  actualizarRuta(id:number){
    this.router.navigate(['actualizar-ruta',id]);
  }

  private obtenerRutas(){
    this.rutaServicio.obtenerListaDeRutas().subscribe(dato => {
      this.rutas = dato;
    });
    return  this.rutas;
  }

    eliminarRuta(id:number){
      swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar la ruta",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , elimínala',
        cancelButtonText: 'No, cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true
      }).then((result) => {
        if(result.value){
          this.rutaServicio.eliminarRuta(id).subscribe(dato => {
            console.log(dato);
            this.obtenerRutas();
            swal(
              'Ruta eliminado',
              'La ruta ha sido eliminada con exito',
              'success'
            )
          })
        }
      })
    }


  verDetallesDelRuta(id:number){
    this.router.navigate(['ruta-detalles',id]);
  }


  //Filtro
  aplicarFiltro() {
    // this.rutasFiltradas = this.rutas.filter((ruta) =>
    //   ruta.estado.toLowerCase().includes(this.filtro.toLowerCase())
    // );
  }
}
