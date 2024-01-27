import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Empleado
import { EmpleadoDetallesComponent } from './empleado/empleado-detalles/empleado-detalle.component';
import { ActualizarEmpleadoComponent } from './empleado/actualizar-empleado/actualizar-empleado.component';
import { ListaEmpleadosComponent } from './empleado/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './empleado/registrar-empleado/registrar-empleado.component';

//Productos
import { ProductoDetallesComponent } from './producto/producto-detalles/productos-detalle.component';
import { ActualizarProductoComponent } from './producto/actualizar-producto/actualizar-producto.component';
import { RegistrarProductoComponent } from './producto/registrar-producto/registrar-producto.component';
import { ListaProductosComponent } from './producto/lista-producto/lista-productos.component';

//Proveedores
import { ListaProveedoresComponent } from './proveedor/lista-proveedor/lista-proveedores.component';
import { RegistrarProveedorComponent } from './proveedor/registrar-proveedor/registrar-proveedor.component';
import { ActualizarProveedorComponent } from './proveedor/actualizar-proveedor/actualizar-proveedor.component';
import { ProveedorDetallesComponent } from './proveedor/proveedor-detalles/proveedor-detalle.component';

//Rutas driver
import { ListaRutasComponent } from './ruta/lista-ruta/lista-rutas.component';
import { RegistrarRutaComponent } from './ruta/registrar-ruta/registrar-ruta.component';
import { ActualizarRutaComponent } from './ruta/actualizar-ruta/actualizar-ruta.component';
import { RutaDetallesComponent } from './ruta/ruta-detalles/ruta-detalle.component';

//Tareas
import { ListaTareasComponent } from './tarea/lista-tarea/lista-tareas.component';
import { RegistrarTareaComponent } from './tarea/registrar-tarea/registrar-tarea.component';
import { ActualizarTareaComponent } from './tarea/actualizar-tarea/actualizar-tarea.component';
import { TareaDetallesComponent } from './tarea/tarea-detalles/tarea-detalle.component';



const routes: Routes = [
  // Rutas Empleados
  {path : 'empleados',component:ListaEmpleadosComponent},
  {path:'',redirectTo:'empleados',pathMatch:'full'},
  {path : 'registrar-empleado',component : RegistrarEmpleadoComponent},
  {path : 'actualizar-empleado/:id',component : ActualizarEmpleadoComponent},
  {path : 'empleado-detalles/:id',component : EmpleadoDetallesComponent},

  //Rutas Productos
  {path : 'productos',component:ListaProductosComponent},
  {path:'',redirectTo:'productos',pathMatch:'full'},
  {path : 'registrar-producto',component : RegistrarProductoComponent},
  {path : 'actualizar-producto/:id',component : ActualizarProductoComponent},
  {path : 'producto-detalles/:id',component : ProductoDetallesComponent},

  //Rutas Proveedores
  {path : 'proveedores',component:ListaProveedoresComponent},
  {path:'',redirectTo:'proveedores',pathMatch:'full'},
  {path : 'registrar-proveedor',component : RegistrarProveedorComponent},
  {path : 'actualizar-proveedor/:id',component : ActualizarProveedorComponent},
  {path : 'proveedor-detalles/:id',component : ProveedorDetallesComponent},

  //Rutas (rutas) para los drivers
  {path : 'rutas',component:ListaRutasComponent},
  {path:'',redirectTo:'rutas',pathMatch:'full'},
  {path : 'registrar-ruta',component : RegistrarRutaComponent},
  {path : 'actualizar-ruta/:id',component : ActualizarRutaComponent},
  {path : 'ruta-detalles/:id',component : RutaDetallesComponent},

  //Rutas Tareas
  {path : 'tareas',component:ListaTareasComponent},
  {path:'',redirectTo:'tareas',pathMatch:'full'},
  {path : 'registrar-tarea',component : RegistrarTareaComponent},
  {path : 'actualizar-tarea/:id',component : ActualizarTareaComponent},
  {path : 'tarea-detalles/:id',component : TareaDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
