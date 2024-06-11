import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  empleadosForm: FormGroup;
  tittle: string = 'Nuevo'

  constructor(
    private formBuilder: FormBuilder,
    private empleadoServices: EmpleadosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.empleadosForm = this.formBuilder.group({
      nombre: [null, []],
      apellidos: [null, []],
      telefono: [null, []],
      email: [null, []],
      salario: [null, []],
      departamento: [null, []],
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      const id = params.idempleado;
      if (id) {
        this.tittle = 'Actualizar';
        //actualizando
        //traerme los datos de un usuario por id
        this.empleadoServices.getById(id).subscribe((data: Empleado) => {
          //relleno el formulario con los campos de data
          this.empleadosForm = this.formBuilder.group({
            _id: [data._id, []],
            nombre: [data.nombre, []],
            apellidos: [data.apellidos, []],
            telefono: [data.telefono, []],
            email: [data.email, []],
            salario: [data.salario, []],
            departamento: [data.departamento, []],
          })
        })
      }
    })
  };

  onSubmit() {
    if (this.empleadosForm.value._id) {
      //actualizando
      const empleadoActualizado = this.empleadosForm.value;
      this.empleadoServices.update(empleadoActualizado).subscribe((response: Empleado) => {
        // ERROR
        if (response._id) {
          //recargar la página
          // window.location.reload;
          this.router.navigate(['/empleados', response._id])
        }
      });

    } else {
      const nuevoEmpleado = this.empleadosForm.value;
      // console.log(nuevoEmpleado);


      this.empleadoServices.insert(nuevoEmpleado).subscribe((response) => {
        // if (response._id) {
        if (response) {
          //redirijo a empleados para ver el nuevo empleado
          this.router.navigate(['/empleados']);
        } else {
          alert('Usuario no se ha podido crear, inténtelo de nuevo');
        }
      })
    }
  }
}
