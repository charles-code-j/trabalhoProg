import { LivroService } from './../../../services/livro.service';
import { Livro } from './../../../models/livro';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-livro-pesquisa',
  templateUrl: './livro-pesquisa.component.html',
  styleUrls: ['./livro-pesquisa.component.scss'],
  providers:[
    LivroService
  ]

})
export class LivroPesquisaComponent implements OnInit {

  public displayedColumns:any[] = ['nome', 'genero','acoes'];
  public dataSource:MatTableDataSource<Livro> = new MatTableDataSource();
  public livros:Livro[] =[];
  public form:FormGroup;

  constructor(private router:Router, private livroService:LivroService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.livroService.pesquisar('').subscribe((lista)=>{
      this.livros = lista;
      this.dataSource = new MatTableDataSource(this.livros);
    })
    this.form = this.formBuilder.group({
      pesquisa:new FormControl()
    })
  }

  public alterar(nome){
    this.router.navigate(['livro/cadastro', nome]);
  }

  public remover(livro){
    this.livroService.excluir(livro.id).subscribe((res)=>{
      let index = this.livros.indexOf(livro);
      this.livros.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.livros);
    })    
  }

  public pesquisar(event){
    let nome = this.form.controls['pesquisa'].value;
    this.livroService.pesquisar(nome).subscribe((lista)=>{
      this.livros = lista;
      this.dataSource = new MatTableDataSource(lista);
    });
  }

  public cadastrar(){
    this.router.navigate(['livro/cadastro']);
  }

}
