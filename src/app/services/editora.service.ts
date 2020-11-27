import { Editora } from './../models/editora';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';

@Injectable()
export class EditoraService extends AbstractService {

    constructor(protected http:HttpClient){
        super(http);
    }

    public getPath(){
        return "editora";
    }

    /**
     * serviço para salvar editora no servidor
     * @param editora > objecto que representa a tabela
     */
    public salvar(editora:Editora):Observable<Editora>{
        return this.http.post<Editora>(this.getUrl(''),editora);
    }

    public pesquisar(nome):Observable<Array<Editora>>{
        return this.http.post<Array<Editora>>(this.getUrl('nome'),nome);
    }

    public buscarPorId(id):Observable<Editora>{
        return this.http.get<Editora>(this.getUrl(`${id}`));
    }

    public excluir(id):Observable<any>{
        return this.http.delete(this.getUrl(`${id}`));
    }

}