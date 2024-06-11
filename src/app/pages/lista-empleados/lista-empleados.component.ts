import { Component } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  arrEmpleados: Empleado[] = [];

  //para usar el servicio debo inyectarlo con el constructor
  constructor(private empleadosServices: EmpleadosService) { }

  //llamar al servicio y me voy a traer los datos
  ngOnInit() {
    this.empleadosServices.getAll().subscribe((data) => {
      this.arrEmpleados = data;
    })
  }

}
