import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { User } from '../models'
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private api_url:string = "http://localhost:5000/api/users";
    userA:Array<User>;
    userRes:Array<User>;
    
    constructor(private http: Http) { }
   
    // para obtener la lista de todos los usuarios
    public getUsers() {
        return this.http.get(this.api_url).map(res => res.json());    
    }

    public getUserByName(name:string){
        return this.http.get(this.api_url +'/'+name).map(res => res.json());
    }

    public getUserById(id){
        return this.http.get(this.api_url +'/'+id).map(res => res.json());
    }

    // para registrar un nuevo usuario en la DB
    public addUser(name:string, email:string, pass:string){

        let user = "name="+name+"&email="+email+"&password="+pass;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post("http://localhost:5000/api/users", user, {headers:headers})
            .map((response:Response) =>{
                let userR = response.json();
                if(userR && userR.token){
                    localStorage.setItem('currentUser', JSON.stringify(userR));
                }
        });
    }

    public updateUser(name:string, lastName: string, email:string, id:string){

        let user = "name="+name+"&lastName="+lastName+"&email="+email;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.put(this.api_url+'/'+id, user, {headers:headers}).map((res: Response) => res.json());
    }

    // para autenticar a un usuario
    public authUser(username:string, password:string){

        let user = "name="+username+"&password="+password;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('http://localhost:5000/api/auth', user, {headers:headers})
           .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let userR = response.json();
                
                if (userR && userR.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(userR));
                }
            });
    }
}