import {Component} from '@angular/core';
import {ProtectService} from '../services';

@Component({
    selector: 'menu-component',
    templateUrl: 'app/user/userMenu.component.html',
    providers: [ProtectService]
})

export class UserMenuComponent{

    private isCurrentUser: boolean;
    constructor(private _protectService:ProtectService){
        this.isCurrentUser = false;
    }

    ngOnInit(){
        this.isCurrentUser = this._protectService.currentUserLogged();
    }
}