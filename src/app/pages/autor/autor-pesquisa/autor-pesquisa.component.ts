import { Autor } from './../../../models/autor';
import { AutorService } from './../../../services/autor.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-autor-pesquisa',
  templateUrl: './autor-pesquisa.component.html',
  styleUrls: ['./autor-pesquisa.component.scss'],
  providers:[
    AutorService
  ]

})
export class AutorPesquisaComponent implements OnInit {

  public displayedColumns:any[] = ['nome', 'sobrenome', 'idade', 'nacionalidade', 'acoes'];
  public dataSource:MatTableDataSource<Autor> = new MatTableDataSource();
  public autores:Autor[] =[];
  public form:FormGroup;

  constructor(private router:Router, private autorService:AutorService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.autorService.pesquisar('').subscribe((lista)=>{
      this.autores = lista;
      this.dataSource = new MatTableDataSource(this.autores);
    })
    this.form = this.formBuilder.group({
      pesquisa:new FormControl()
    })
  }

  public alterar(autor){
    this.router.navigate(['autor/cadastro', autor])
  }

  public remover(autor){
    this.autorService.excluir(autor.id).subscribe((res)=>{
      let index = this.autores.indexOf(autor);
      this.autores.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.autores);
    })    
  }

  public pesquisar(event){
    let nome = this.form.controls['pesquisa'].value;
    this.autorService.pesquisar(nome).subscribe((lista)=>{
      this.autores = lista;
      this.dataSource = new MatTableDataSource(lista);
    });
  }

  public cadastrar(){
    this.router.navigate(['autor/cadastro']);
  }

}
