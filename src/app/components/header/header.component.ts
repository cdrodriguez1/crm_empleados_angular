import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  logado: boolean = false

  ngOnInit() {
    // if (localStorage.getItem('token')) {
    //   this.logado = true;
    // }
    this.logado = localStorage.getItem('token') ? true : false;
  }

  logout() {
    localStorage.removeItem('token');
    //recargar la pagina
    window.location.href = 'http://localhost:4200/';
  }
}
