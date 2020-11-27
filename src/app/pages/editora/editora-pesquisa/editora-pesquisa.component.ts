import { Editora } from './../../../models/editora';
import { EditoraService } from './../../../services/editora.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editora-pesquisa',
  templateUrl: './editora-pesquisa.component.html',
  styleUrls: ['./editora-pesquisa.component.scss'],
  providers:[
    EditoraService
  ]

})
export class EditoraPesquisaComponent implements OnInit {

  public displayedColumns:any[] = ['nome', 'numeroObrasPublicada', 'tipoEditora', 'endereco', 'telefone', 'acoes'];
  public dataSource:MatTableDataSource<Editora> = new MatTableDataSource();
  public editoras:Editora[] =[];
  public form:FormGroup;

  constructor(private router:Router, private editoraService:EditoraService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.editoraService.pesquisar('').subscribe((lista)=>{
      this.editoras = lista;
      this.dataSource = new MatTableDataSource(this.editoras);
    })
    this.form = this.formBuilder.group({
      pesquisa:new FormControl()
    })
  }

  public alterar(editora){
    this.router.navigate(['editora/cadastro', editora]);
  }

  public remover(editora){
    this.editoraService.excluir(editora.id).subscribe((res)=>{
      let index = this.editoras.indexOf(editora);
      this.editoras.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.editoras);
    })    
  }

  public pesquisar(event){
    let nome = this.form.controls['pesquisa'].value;
    this.editoraService.pesquisar(nome).subscribe((lista)=>{
      this.editoras = lista;
      this.dataSource = new MatTableDataSource(lista);
    });
  }

  public cadastrar(){
    this.router.navigate(['editora/cadastro']);
  }

}
