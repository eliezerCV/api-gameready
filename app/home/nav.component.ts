import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {SUDComponent} from './sud.component';
import {SearchGameComponent} from '../game/searchGame.component';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/home/nav.component.html',
    styleUrls:['app/home/menu.css'] 
})

export class NavComponent{

    private showMenu: boolean = false;
    constructor(private _router:Router){}

    private showMenuItems(){
        this.showMenu = !this.showMenu;
    }
}