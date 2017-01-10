import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CommentService{

    private apiUrl: string = "http://localhost:5000/api/comments";

    constructor(private _http: Http){

    }

     public getCommentsById(id){
        return this._http.get(this.apiUrl+'/'+id).map(res => res.json());
    }
    public getCommentsByName(name){
        return this._http.get(this.apiUrl+'?author='+name).map(res => res.json());
    }

    public addNewComment(id, name, comment){

        let body = "idPublication="+id+"&author="+name+"&content="+comment;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.apiUrl, body, {headers:headers}).map((res:Response) => {
            res.json();
        });
    }
}