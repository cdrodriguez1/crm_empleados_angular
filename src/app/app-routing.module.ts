import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { EmpleadoViewComponent } from './components/empleado-view/empleado-view.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'empleados', component: ListaEmpleadosComponent },
  // { path: 'empleados', component: ListaEmpleadosComponent, canActivate: [loginGuard] },
  { path: 'nuevo-empleado', component: FormComponent },
  { path: 'empleados/:idempleado', component: EmpleadoViewComponent },
  { path: 'actualizar-empleado/:idempleado', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



