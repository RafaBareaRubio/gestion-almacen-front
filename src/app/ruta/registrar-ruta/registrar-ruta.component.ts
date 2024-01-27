import { RutaService } from '../ruta.service';
import { Ruta } from '../ruta';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-ruta',
  templateUrl: './registrar-ruta.component.html',
  styleUrls: ['./registrar-ruta.component.css']
})
export class RegistrarRutaComponent implements OnInit {

  ruta : Ruta = new Ruta();
  constructor(private rutaServicio:RutaService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarRuta(){
    this.rutaServicio.registrarRuta(this.ruta).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeRutas();
    },error => console.log(error));
  }

  irALaListaDeRutas(){
    this.router.navigate(['/rutas']);
    swal('Ruta registrada',`El ruta ${this.ruta.id} ha sido registrada con exito`,`success`);
  }

  onSubmit(){
    this.guardarRuta();
  }
}
