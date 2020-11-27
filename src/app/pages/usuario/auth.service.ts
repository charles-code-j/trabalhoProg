import { EventEmitter, Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  private usuarioAutenticado: boolean = false;
  mostrarMenu = new EventEmitter<boolean>();

  constructor(private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if(this.usuarioEstaAutenticado()){
      return true;
    }
      this.router.navigate(['login']);
      return false;

  }

  fazerLogin(usuario: Usuario){
    if(usuario.login === 'joao@gmail.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.mostrarMenu.emit(true);
      this.router.navigate(['menu']);
      localStorage.setItem('login', usuario.login);
    }
    else if(usuario.login === 'carlos@gmail.com' && usuario.senha === '54321') {
      this.usuarioAutenticado = true;
      this.mostrarMenu.emit(true);
      this.router.navigate(['menu']);
      localStorage.setItem('login', usuario.login);
    }
    else if(usuario.login === 'maria@hotmail.com' && usuario.senha === '987654') {
      this.usuarioAutenticado = true;
      this.mostrarMenu.emit(true);
      this.router.navigate(['menu']);
      localStorage.setItem('login', usuario.login);
    }
    else {
      this.usuarioAutenticado = false;
      this.mostrarMenu.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
