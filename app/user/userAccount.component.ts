import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services';

@Component({
    selector: 'user-profile',
    templateUrl: 'app/user/userAccount.component.html',
    providers: [UserService]
})

export class UserAccountComponent{

    private pass: boolean = false;
    private account: boolean = false;
    private user: any = {};
    private token: any = {};
    private userService:UserService;
    private router: Router;

    constructor(_router: Router, _userService: UserService){
        this.userService = _userService;
        this.router = _router;
    }

    onNgInit(){
        if(localStorage.getItem("currentUser")){
            this.token = localStorage.getItem("currentUser");
        }
    }


    changePass(){
        this.pass = !this.pass;
    }

    changeAccount(){this.account = !this.account;}

    updateProfile(){

    }
}