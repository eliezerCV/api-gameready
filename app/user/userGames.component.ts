import {Component} from '@angular/core';
import {GameService, ProtectService} from '../services';
import {Router} from '@angular/router';

@Component({
    selector: 'user-game',
    templateUrl: 'app/user/userGames.component.html',
    providers:[GameService, ProtectService]
})

export class UserGameComponent{
    

   
    private games:Array<any>;
    private user:any;

    constructor(private _gameService:GameService, private _protectService:ProtectService, private _router: Router){}

    ngOnInit(){
        if(this._protectService.currentUserLogged()){
            this.user = JSON.parse(localStorage.getItem('currentUser'));
            this.getGamesByUser();
        }else{this._router.navigateByUrl('/userLogin');}
        
    }

    private getGamesByUser(){
        this._gameService.getGameByUserName(this.user.name).subscribe(data => {
            this.games = data;
        },
        error =>{});
    }
}