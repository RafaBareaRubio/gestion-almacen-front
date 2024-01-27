import  swal  from 'sweetalert2';
import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-tarea',
  templateUrl: './actualizar-tarea.component.html',
  styleUrls: ['./actualizar-tarea.component.css']
})
export class ActualizarTareaComponent implements OnInit {

  id:number;
  tarea:Tarea = new Tarea();
  constructor(private tareaService:TareaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tareaService.obtenerTareaPorId(this.id).subscribe(dato =>{
      this.tarea = dato;
    },error => console.log(error));
  }

  irAlaListaDeTareas(){
    this.router.navigate(['/tareas']);
    swal('Tarea actualizada',`El tarea ${this.tarea.id} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.tareaService.actualizarTarea(this.id,this.tarea).subscribe(dato => {
      this.irAlaListaDeTareas();
    },error => console.log(error));
  }
}
