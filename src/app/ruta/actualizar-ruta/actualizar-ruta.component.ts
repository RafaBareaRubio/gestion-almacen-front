import  swal  from 'sweetalert2';
import { RutaService } from '../ruta.service';
import { Ruta } from '../ruta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-ruta',
  templateUrl: './actualizar-ruta.component.html',
  styleUrls: ['./actualizar-ruta.component.css']
})
export class ActualizarRutaComponent implements OnInit {

  id:number;
  ruta:Ruta = new Ruta();
  constructor(private rutaService:RutaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.rutaService.obtenerRutaPorId(this.id).subscribe(dato =>{
      this.ruta = dato;
    },error => console.log(error));
  }

  irAlaListaDeRutas(){
    this.router.navigate(['/rutas']);
    swal('Ruta actualizada',`El ruta ${this.ruta.id} ha sido actualizada con exito`,`success`);
  }

  onSubmit(){
    this.rutaService.actualizarRuta(this.id,this.ruta).subscribe(dato => {
      this.irAlaListaDeRutas();
    },error => console.log(error));
  }
}
