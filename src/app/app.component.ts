import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './pages/usuario/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trabalho2';

  mostrarMenu:boolean = false;

  constructor(private authService: AuthService,
              private router: Router){

  }

  ngOnInit(){
    this.authService.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
  mostrar():boolean {
    return this.router.url.indexOf('login') < 0;
  }

  deslogar(){
    localStorage.removeItem('login');
  }
}
