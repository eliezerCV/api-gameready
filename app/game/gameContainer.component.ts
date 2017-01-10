import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {GameService} from '../services';
import {FilterCategoryComponent} from './filter-category.component';

@Component({
    selector: 'game-container',
    templateUrl: 'app/game/gameContainer.component.html',
    providers: [GameService]
})

export class GameContainerComponent{

    private games:Array<any>;
    private tittle:string;
    private displayGames: boolean;
    constructor(private _gameService: GameService){}

    ngOnInit(){
        this.getGames();
    }
    
    private getGames(){
        this._gameService.getGames().subscribe(data => {
            this.games = data;
            this.displayGames = true;
            this.tittle = "Los juegos mas recientes";
        },
        error =>{});
        if(this.games == null) this.displayGames = false;
    }

    private getGamesByGame(){
        console.log('filtro de juegos por categoria juego');
        this._gameService.getGamesByCategory('game').subscribe(data => {
            this.games = data;
            this.tittle = "Categoria Juego";
        });
    }

    private getGamesByPrototype(){
        console.log('filtro de juegos por categoria prototipo');
        this._gameService.getGamesByCategory('prototype').subscribe(data => {
            this.games = data;
            this.tittle = "Categoria Prototipo";
        });
    }

    private getGamesByPopular(){
        console.log('filtro de juegos por los mas populares');
    }

    private getGamesByAproved(){
        console.log('filtro de juegos por los aprovados');
        this._gameService.getGamesAproved(true).subscribe(data => {
            this.games = data;
            this.tittle = "Juegoa Aprobados por la comunidad";
        });
    }
}