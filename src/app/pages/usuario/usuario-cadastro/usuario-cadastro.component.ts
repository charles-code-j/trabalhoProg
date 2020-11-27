import { Usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario:Usuario = new Usuario();
  public usuarios:Usuario[] = [];
  public dataSource:MatTableDataSource<Usuario> = new MatTableDataSource(this.usuarios);
  public form:FormGroup = new FormGroup({
    login: new FormControl(),
    senha:new FormControl() 
  })
  constructor(private router:ActivatedRoute,
    private authService:AuthService) { }

    ngOnInit(): void { 
    }

  public logar(){
    this.authService.fazerLogin(this.usuario);
    }
}