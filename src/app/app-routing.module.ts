import { SobreComponent } from './pages/sobre/sobre.component';
import { AutorPesquisaComponent } from './pages/autor/autor-pesquisa/autor-pesquisa.component';
import { AutorCadastroComponent } from './pages/autor/autor-cadastro/autor-cadastro.component';
import { LivroCadastroComponent } from './pages/livro/livro-cadastro/livro-cadastro.component';
import { LivroPesquisaComponent } from './pages/livro/livro-pesquisa/livro-pesquisa.component';
import { EditoraCadastroComponent } from './pages/editora/editora-cadastro/editora-cadastro.component';
import { EditoraPesquisaComponent } from './pages/editora/editora-pesquisa/editora-pesquisa.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioCadastroComponent } from './pages/usuario/usuario-cadastro/usuario-cadastro.component';
import { MenuPrincipalComponent } from './pages/menu/menu-principal/menu-principal.component';
import { AuthService } from './pages/usuario/auth.service';
import { TutorialComponent } from './pages/tutorial/tutorial.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'Livro/cadastro',
    pathMatch:'full'
  },
  {
    path:'livro/cadastro',
    component:LivroCadastroComponent,
    canActivate: [AuthService]
  },
  {
    path:'livro/pesquisa',
    component:LivroPesquisaComponent,
    canActivate: [AuthService]
  },
  {
    path:'',
    redirectTo:'editora/cadastro',
    pathMatch:'full'
  },
  {
    path:'editora/cadastro',
    component:EditoraCadastroComponent,
    canActivate: [AuthService]
  },
  {
    path:'editora/pesquisa',
    component:EditoraPesquisaComponent,
    canActivate: [AuthService]
  }
  ,
  {
    path:'',
    redirectTo:'autor/cadastro',
    pathMatch:'full'
  },
  {
    path:'autor/cadastro',
    component:AutorCadastroComponent,
    canActivate: [AuthService]
  },
  {
    path:'autor/pesquisa',
    component:AutorPesquisaComponent,
    canActivate: [AuthService]
  },
  {
    path:'login',
    component:UsuarioCadastroComponent
  },
  {
    path:'sobre',
    component:SobreComponent,
    canActivate: [AuthService]
  },
  {
    path:'tutorial',
    component:TutorialComponent,
    canActivate: [AuthService]
  },
  {
    path:'menu',
    component:MenuPrincipalComponent,
    canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
