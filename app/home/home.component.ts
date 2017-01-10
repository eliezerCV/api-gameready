import {Component} from '@angular/core';
import {User} from '../models/user';
import { Router } from '@angular/router';
import {GameContainerComponent} from '../game/gameContainer.component';
import {SUDComponent} from '../home/sud.component';

@Component({
    selector: 'home',
    templateUrl:'app/home/home.component.html',
    styleUrls:['app/home/menu.css']
})

export class HomeComponent{
    
    currentUser: User;

    constructor(private _router: Router){
        if (localStorage.getItem('currentUser')) {
            //obtenemos los datos del usuario en sesion
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        } else{
            // 
        }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this._router.navigateByUrl('/home');
    }
}