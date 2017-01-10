import {Component} from '@angular/core';
import {GameService} from '../services';
import {Router} from '@angular/router';
import {NavComponent} from '../home/nav.component';

@Component({
    selector:'game-post',
    templateUrl:'app/game/gamePost.component.html',
    providers:[GameService]
})

export class GamePostComponent{

    private game:any = {};
   
    private user: any;

    constructor(private _gameService:GameService, private _router:Router){
        if(!localStorage.getItem('currentUser')){this._router.navigateByUrl('/userLogin')}
    }

    private saveGame(){

        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.game.userAuthor = this.user.name;
        
        this._gameService.addGamePost(this.game).subscribe(data => {
           this._router.navigateByUrl('/home');
        },
        error =>{});
    }
}