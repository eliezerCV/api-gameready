import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'filter-category',
    templateUrl: 'app/game/filter-category.component.html'
})

export class FilterCategoryComponent{

    @Output() getGamesByCategoryGame = new EventEmitter<any>();
    @Output() getGamesByCategoryPrototype = new EventEmitter<any>();
    @Output() getGamesByMostPopular = new EventEmitter<any>();
    @Output() getGamesByAproved = new EventEmitter<any>();
    @Output() getGamesByRecent = new EventEmitter<any>();
   
    constructor(private router: Router){}

    private filterByGame(){
        this.getGamesByCategoryGame.emit();
    }

    private filterByPrototype(){
        this.getGamesByCategoryPrototype.emit();
    }

    private filterByPopular(){
        this.getGamesByMostPopular.emit();
    }

    private filterByAproved(){
        this.getGamesByAproved.emit();
    }

    private filterByRecent(){
        this.getGamesByRecent.emit();
    }
}