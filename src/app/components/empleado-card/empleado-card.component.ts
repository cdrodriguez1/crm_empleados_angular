import { Component, Input } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-empleado-card',
  templateUrl: './empleado-card.component.html',
  styleUrls: ['./empleado-card.component.css']
})
export class EmpleadoCardComponent {

  //la exclamación sirve para no tener que inicializar el Input
  @Input() empleadito!: Empleado;

}
