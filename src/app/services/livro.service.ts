import { Livro } from './../models/livro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';

@Injectable()
export class LivroService extends AbstractService {

    constructor(protected http:HttpClient){
        super(http);
    }

    public getPath(){
        return "livro";
    }

    /**
     * serviço para salvar livro no servidor
     * @param livro > objecto que representa a tabela
     */
    public salvar(livro:Livro):Observable<Livro>{
        return this.http.post<Livro>(this.getUrl(''),livro);
    }

    public pesquisar(nome):Observable<Array<Livro>>{
        return this.http.post<Array<Livro>>(this.getUrl('nome'),nome);
    }

    public buscarPorId(id):Observable<Livro>{
        return this.http.get<Livro>(this.getUrl(`${id}`));
    }

    public excluir(id):Observable<any>{
        return this.http.delete(this.getUrl(`${id}`));
    }
    public alterar(nome):Observable<any>{
        return this.http.put(this.getUrl(`${nome}`), nome);
    }

}