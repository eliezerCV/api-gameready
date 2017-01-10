import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../services';
import {SUDComponent} from '../home/sud.component';

@Component({
    selector: 'userLogin',
    templateUrl:'app/user/userLogin.component.html',
    providers :[UserService]
})

export class UserLoginComponent{
    
    private usuario:any = {};
    private err: boolean;
    private router: Router;
    private userService: UserService;

    constructor(_router: Router,_userService:UserService){
        this.router = _router; 
        this.userService = _userService;
        this.err = false;
    }

    login(){
        this.userService.authUser(this.usuario.username, this.usuario.password).subscribe(data => {
            this.router.navigateByUrl('/home');
        },
        err =>{
            
        });
    }

    private alertQuit(){
        this.err = false;
    }
}