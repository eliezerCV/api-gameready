import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProtectService} from '../services';


@Component({
    selector:'sud',
    templateUrl:'app/home/sud.component.html',
    styleUrls:['app/home/menu.css'],
    providers: [ProtectService]
})

export class SUDComponent{

    private user: any = {};
    private isLogged: boolean = false;
    
    constructor(private _router: Router, private _protectService: ProtectService){
        this.isLogged = this._protectService.currentUserLogged();
    }

    ngOnInit(){
        this.isLogged = this._protectService.currentUserLogged();
        if(this.isLogged){
            this.user = localStorage.getItem('currentUser');
        } else {this.user = null;}
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.user = null;
        this.isLogged = false;
        this._router.navigateByUrl('/home');
    }
}