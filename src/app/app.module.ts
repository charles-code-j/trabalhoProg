import { LivroPesquisaComponent } from './pages/livro/livro-pesquisa/livro-pesquisa.component';
import { LivroCadastroComponent } from './pages/livro/livro-cadastro/livro-cadastro.component';
import { EditoraPesquisaComponent } from './pages/editora/editora-pesquisa/editora-pesquisa.component';
import { EditoraCadastroComponent } from './pages/editora/editora-cadastro/editora-cadastro.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './pages/usuario/auth.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { UsuarioCadastroComponent } from './pages/usuario/usuario-cadastro/usuario-cadastro.component';

import { MenuPrincipalComponent } from './pages/menu/menu-principal/menu-principal.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AutorCadastroComponent } from './pages/autor/autor-cadastro/autor-cadastro.component';
import { AutorPesquisaComponent } from './pages/autor/autor-pesquisa/autor-pesquisa.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { UsuarioPesquisaComponent } from './pages/usuario/usuario-pesquisa/usuario-pesquisa.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LivroCadastroComponent,
    LivroPesquisaComponent,
    UsuarioCadastroComponent,
    EditoraCadastroComponent,
    EditoraPesquisaComponent,
    MenuPrincipalComponent,
    AutorCadastroComponent,
    AutorPesquisaComponent,
    SobreComponent,
    UsuarioPesquisaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    FlexLayoutModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
