import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService, ProtectService} from '../services';
import {SUDComponent} from '../home/sud.component';

@Component({
    selector: 'user-profile',
    templateUrl: 'app/user/userProfile.component.html',
    providers: [UserService, ProtectService]
})

export class UserProfileComponent{

    private isLogged: boolean;
    private user: any = {};
    private currentUser: any = {};
    
   
    constructor(private _router: Router,private  _userService: UserService, private _protectService:ProtectService){
        
        
        this.isLogged = false;
    }

    ngOnInit(){

        this.isLogged = this._protectService.currentUserLogged();
        if(this.isLogged){
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.user.userId = this.currentUser.userId;
        }else{this._router.navigateByUrl('/userLogin');}
        
        this._userService.getUserByName(this.currentUser.name).subscribe(data => {
            this.user = data;
        },
        error =>{});
    }

    updateProfile(){
        this._userService.updateUser(this.user.name, this.user.lastName, this.user.email,this.currentUser.userId).subscribe(data =>{
            this._router.navigateByUrl('/userProfile');
        },
        error => {});
    }
}