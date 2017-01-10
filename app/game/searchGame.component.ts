import {Component} from '@angular/core';
import {GameService} from '../services';
import {Router} from '@angular/router';
@Component({
    selector: 'search-game',
    templateUrl: 'app/game/searchGame.component.html',
    providers: [GameService]
})

export class SearchGameComponent{

    private search: any = {};
    private foundGames:any = {};
    private games: boolean = false;

    constructor(private _gameService: GameService, private _router: Router){}

    private sendSearch(val){
        if(val == '') {
            this.games = false;
            return;
        }
        this._gameService.searchGames(val).subscribe(data => {
            this.foundGames = data;
            this.games = true;
        })
        for(let g of this.foundGames){
            console.log(g.title);
        }
    }
}