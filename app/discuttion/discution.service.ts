import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DiscutionService{

    private apiUrl:string = "http://localhost:5000/api/discutions";
    constructor(private _http: Http){}

    public getDiscutions(){
        return this._http.get(this.apiUrl).map(res => res.json()); 
    }

    public getDiscutionById(id){
        return this._http.get(this.apiUrl+'/'+id).map(res => res.json());
    }

    public addDiscution(tittle,desc,author){
        let discution = "title="+tittle+"&description="+desc+"&author="+author;

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.apiUrl, discution, {headers:headers})
           .map((response: Response) => response.json());
    }
}