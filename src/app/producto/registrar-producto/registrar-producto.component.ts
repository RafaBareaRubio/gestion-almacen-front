import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

//QR
//import { HttpClient } from '@angular/common/http';
//import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';


@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {


  producto : Producto = new Producto();
  constructor(private productoServicio:ProductoService,private router:Router) { }

  // QR
  // public webcamImage: WebcamImage = null;

  // public triggerSnapshot(): void {
  //   this.webcamImage = this.webcamImage;
  // }
  //QR


  ngOnInit(): void {
  }

  guardarProducto(){
    this.productoServicio.registrarProducto(this.producto).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeProductos();
    },error => console.log(error));
  }

  irALaListaDeProductos(){
    this.router.navigate(['/productos']);
    swal('Producto registrado',`El producto ${this.producto.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarProducto();
  }
}
