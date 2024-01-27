import  swal  from 'sweetalert2';
import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas:Tarea[];

  constructor(private tareaServicio:TareaService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerTareas();
  }

  actualizarTarea(id:number){
    this.router.navigate(['actualizar-tarea',id]);
  }

  private obtenerTareas(){
    this.tareaServicio.obtenerListaDeTareas().subscribe(dato => {
      this.tareas = dato;
    });
  }

    eliminarTarea(id:number){
      swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar la tarea",
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
          this.tareaServicio.eliminarTarea(id).subscribe(dato => {
            console.log(dato);
            this.obtenerTareas();
            swal(
              'Tarea eliminada',
              'La tarea ha sido eliminada con exito',
              'success'
            )
          })
        }
      })
    }


  verDetallesDelTarea(id:number){
    this.router.navigate(['tarea-detalles',id]);
  }

    //Filtro
    aplicarFiltro() {
      // this.rutasFiltradas = this.rutas.filter((ruta) =>
      //   ruta.estado.toLowerCase().includes(this.filtro.toLowerCase())
      // );
    }
}
