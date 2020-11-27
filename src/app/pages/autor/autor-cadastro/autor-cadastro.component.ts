import { AutorService } from './../../../services/autor.service';
import { Autor } from './../../../models/autor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-autor-cadastro',
  templateUrl: './autor-cadastro.component.html',
  styleUrls: ['./autor-cadastro.component.scss'],
  providers:[
    AutorService
  ]
})
export class AutorCadastroComponent implements OnInit {

  public form:FormGroup;
  public autor:Autor = new Autor();

  constructor(private route:ActivatedRoute,private router:Router,public formBuilder:FormBuilder,
    private autorService:AutorService ) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: new FormControl(),
      nome:new FormControl(),
      sobrenome:new FormControl(),
      idade:new FormControl(),
      nacionalidade:new FormControl()
    });
    this.route.params.subscribe((cate)=>{
      this.autor = cate as Autor;
      this.form.patchValue(this.autor);
    })
  }

  public salvar(){
    if (this.form.invalid){
      alert('Possui campos obrigatórios');
      return;
    }
    this.autor = this.form.value;
    this.autorService.salvar(this.autor).subscribe((autor)=>{
      alert('Salvo com sucesso');
      console.table(autor);
      this.router.navigate(['autor/pesquisa']);    
    });
  }

}
