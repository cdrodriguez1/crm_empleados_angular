import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleado-view',
  templateUrl: './empleado-view.component.html',
  styleUrls: ['./empleado-view.component.css']
})
export class EmpleadoViewComponent {

  empleado!: Empleado;


  constructor(
    private empleadosServices: EmpleadosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //tenemos que capturtar el _id de la ruta
    this.activatedRoute.params.subscribe((params: any) => {
      const id = params.idempleado;
      //teniendo el id, sólo tengo que consultar al servicio al método getById
      this.empleadosServices.getById(id).subscribe((data) => {
        this.empleado = data
      })
    });
  }

  onDelete(id: string | undefined) {
    if (id) {
      this.empleadosServices.delete(id).subscribe((response: Empleado) => {
        if (response._id) {
          alert('El usuario se ha boorado correctamente');
          this.router.navigate(['/empleados'])
        } else {
          alert('El usuario no ha podido ser borrado');
        }
      })
    }
  }
}


