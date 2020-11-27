import { Autor } from './../models/autor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';

@Injectable()
export class AutorService extends AbstractService {

    constructor(protected http:HttpClient){
        super(http);
    }

    public getPath(){
        return "autor";
    }

    /**
     * serviço para salvar autor no servidor
     * @param autor > objecto que representa a tabela
     */
    public salvar(autor:Autor):Observable<Autor>{
        return this.http.post<Autor>(this.getUrl(''),autor);
    }

    public pesquisar(nome):Observable<Array<Autor>>{
        return this.http.post<Array<Autor>>(this.getUrl('nome'),nome);
    }

    public buscarPorId(id):Observable<Autor>{
        return this.http.get<Autor>(this.getUrl(`${id}`));
    }

    public excluir(id):Observable<any>{
        return this.http.delete(this.getUrl(`${id}`));
    }

    public alterar(id):Observable<Autor>{
        return this.http.put<Autor>(this.getUrl(`${id}`), id);
    }
}