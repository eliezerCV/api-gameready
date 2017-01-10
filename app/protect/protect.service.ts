import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ProtectService{

    public currentUserLogged(){
        if(localStorage.getItem('currentUser')){ return true;}
        else {return false;}
    }

    public logoutUser(){
        localStorage.removeItem('currentUser');
    }
}