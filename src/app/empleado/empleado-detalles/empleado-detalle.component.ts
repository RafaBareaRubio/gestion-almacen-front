import  swal  from 'sweetalert2';
import { EmpleadoService } from '../empleado.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styleUrls: ['./empleado-detalle.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id:number;
  empleado:Empleado;
  constructor(private route:ActivatedRoute,private empleadoServicio:EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
      swal(`Detalles del empleado ${this.empleado.nombre}`);
    });
  }

}
