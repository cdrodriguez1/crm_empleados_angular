import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, []],
      password: [null, []],
    })
  }

  onSubmit() {
    this.usuariosService.login(this.loginForm.value).subscribe((response: any) => {
      // console.log(response);
      if (response.success) {
        //logado correctamente, guardamos en localStorage el token
        localStorage.setItem('token', response.token) //setItem guardar, getItem obtener, removeIten borrar
        window.location.href = '/empleados'
        // this.router.navigate(['/empleados'])
      } else {
        alert('usuario erroneo');
      }
    });
  }

}
