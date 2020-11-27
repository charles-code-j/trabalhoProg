import { EditoraService } from './../../../services/editora.service';
import { Editora } from './../../../models/editora';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editora-cadastro',
  templateUrl: './editora-cadastro.component.html',
  styleUrls: ['./editora-cadastro.component.scss'],
  providers:[
    EditoraService
  ]
})
export class EditoraCadastroComponent implements OnInit {

  public form:FormGroup;
  public editora:Editora = new Editora();

  constructor(private route:ActivatedRoute,private router:Router,public formBuilder:FormBuilder,
    private editoraService:EditoraService ) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: new FormControl(),
      nome:new FormControl(),
      numeroObrasPublicada:new FormControl(),
      tipoEditora:new FormControl(),
      endereco:new FormControl(),
      telefone:new FormControl()
    });
    this.route.params.subscribe((cate)=>{
      this.editora = cate as Editora;
      this.form.patchValue(this.editora);
    })
  }

  public salvar(){
    if (this.form.invalid){
      alert('Possui campos obrigatórios');
      return;
    }
    this.editora = this.form.value;
    this.editoraService.salvar(this.editora).subscribe((editora)=>{
      alert('Salvo com sucesso');
      console.table(editora); 
      this.router.navigate(['editora/pesquisa']); 
    });
  }

}
