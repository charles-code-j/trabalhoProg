import { Livro } from '../../../models/livro';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livro-cadastro',
  templateUrl: './livro-cadastro.component.html',
  styleUrls: ['./livro-cadastro.component.scss'],
 providers:[
  LivroService
  ]
})
export class LivroCadastroComponent implements OnInit {

  public livro: Livro = new Livro();
  public form:FormGroup;

  constructor(private route:ActivatedRoute,private router:Router, public formBuilder:FormBuilder,
    private livroService:LivroService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome:new FormControl(),
      genero:new FormControl()
    });
    this.route.params.subscribe((livr)=>{
      this.livro = livr as Livro;
      this.form.patchValue(this.livro);
    })
  }

  public salvar(){
    if (this.form.invalid){
      alert('Possui campos obrigatórios');
      return;
    }
    this.livro = this.form.value;
    this.livroService.salvar(this.livro).subscribe((livros)=>{
      alert('Salvo com sucesso');
      console.table(livros);
      this.router.navigate(['livro/pesquisa']);
    });
  }

}