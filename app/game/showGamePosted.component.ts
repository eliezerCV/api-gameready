import {Component} from '@angular/core';
import {GameService} from '../services';
import {CommentContainerComponent} from '../comment/commentsContainer.component';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'game-posted',
    templateUrl: 'app/game/showGamePosted.component.html',
    providers: [GameService]
})

export class ShowGamePosted{

    private game:any = {};
    private idGame:any;

    constructor(private _gameService: GameService,private _route:ActivatedRoute){}

    ngOnInit(){
        this._route.params.subscribe(params =>{
            this.idGame = params['id'];
        });
        
        this.getGame();
    }
    private getGame(){
        this._gameService.getgameById(this.idGame).subscribe(data => {
            this.game = data;
        },
        error => {});
    }


}