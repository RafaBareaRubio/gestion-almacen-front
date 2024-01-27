import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { QRCodeModule } from 'angularx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './componentes/header/header.component';
import { EnumsComponent } from './componentes/enums/enums.component';
// import { WebcamQRComponent } from './componentes/webcam-qr/webcam-qr.component';



import { ListaEmpleadosComponent } from './empleado/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './empleado/registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './empleado/actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado/empleado-detalles/empleado-detalle.component';

import { ListaProductosComponent } from './producto/lista-producto/lista-productos.component';
import { RegistrarProductoComponent } from './producto/registrar-producto/registrar-producto.component';
import { ProductoDetallesComponent } from './producto/producto-detalles/productos-detalle.component';
import { ActualizarProductoComponent } from './producto/actualizar-producto/actualizar-producto.component';

import { ListaProveedoresComponent } from './proveedor/lista-proveedor/lista-proveedores.component';
import { RegistrarProveedorComponent } from './proveedor/registrar-proveedor/registrar-proveedor.component';
import { ActualizarProveedorComponent } from './proveedor/actualizar-proveedor/actualizar-proveedor.component';
import { ProveedorDetallesComponent } from './proveedor/proveedor-detalles/proveedor-detalle.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { ListaRutasComponent } from './ruta/lista-ruta/lista-rutas.component';
import { RegistrarRutaComponent } from './ruta/registrar-ruta/registrar-ruta.component';
import { RutaDetallesComponent } from './ruta/ruta-detalles/ruta-detalle.component';
import { ActualizarRutaComponent } from './ruta/actualizar-ruta/actualizar-ruta.component';

import { ListaTareasComponent } from './tarea/lista-tarea/lista-tareas.component';
import { RegistrarTareaComponent } from './tarea/registrar-tarea/registrar-tarea.component';
import { ActualizarTareaComponent } from './tarea/actualizar-tarea/actualizar-tarea.component';
import { TareaDetallesComponent } from './tarea/tarea-detalles/tarea-detalle.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    //Empleados
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    EmpleadoDetallesComponent,
    //Producto
    ListaProductosComponent,
    RegistrarProductoComponent,
    ActualizarProductoComponent,
    ProductoDetallesComponent,
    //Proveedor
    ListaProveedoresComponent,
    RegistrarProveedorComponent,
    ActualizarProveedorComponent,
    ProveedorDetallesComponent,
    //Rutas
    ListaRutasComponent,
    RegistrarRutaComponent,
    ActualizarRutaComponent,
    RutaDetallesComponent,
    //Tareas
    ListaTareasComponent,
    RegistrarTareaComponent,
    ActualizarTareaComponent,
    TareaDetallesComponent,
    EnumsComponent,
    // WebcamQRComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
    // QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
