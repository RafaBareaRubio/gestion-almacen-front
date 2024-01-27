import  swal  from 'sweetalert2';
import { RutaService } from '../ruta.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ruta } from '../ruta';

@Component({
  selector: 'app-ruta-detalles',
  templateUrl: './ruta-detalle.component.html',
  styleUrls: ['./ruta-detalle.component.css']
})
export class RutaDetallesComponent implements OnInit {

  id:number;
  ruta:Ruta;
  constructor(private route:ActivatedRoute,private rutaServicio:RutaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ruta = new Ruta();
    this.rutaServicio.obtenerRutaPorId(this.id).subscribe(dato => {
      this.ruta = dato;
      swal(`Detalles de la ruta ${this.ruta.id}`);
    });
  }

}
