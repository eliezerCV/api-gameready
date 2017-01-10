import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import {SUDComponent} from '../home/sud.component';

@Component({
    selector:'userRegister',
    templateUrl:'app/user/userRegister.component.html',
    providers :[UserService]
})

export class UserRegisterComponent{
    private user:any = {};
    private router: Router;
    private userService: UserService;
    
    constructor(_router: Router, _userService: UserService){
        this.router = _router;
        this.userService = _userService;
    }

    registerUser(){
        this.userService.addUser(this.user.name, this.user.email, this.user.pass).subscribe(data => {
            this.router.navigateByUrl('/home');
        },
        error =>{});
    }
}