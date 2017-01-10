"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var services_1 = require('../services');
var GameContainerComponent = (function () {
    function GameContainerComponent(_gameService) {
        this._gameService = _gameService;
    }
    GameContainerComponent.prototype.ngOnInit = function () {
        this.getGames();
    };
    GameContainerComponent.prototype.getGames = function () {
        var _this = this;
        this._gameService.getGames().subscribe(function (data) {
            _this.games = data;
            _this.displayGames = true;
            _this.tittle = "Los juegos mas recientes";
        }, function (error) { });
        if (this.games == null)
            this.displayGames = false;
    };
    GameContainerComponent.prototype.getGamesByGame = function () {
        var _this = this;
        console.log('filtro de juegos por categoria juego');
        this._gameService.getGamesByCategory('game').subscribe(function (data) {
            _this.games = data;
            _this.tittle = "Categoria Juego";
        });
    };
    GameContainerComponent.prototype.getGamesByPrototype = function () {
        var _this = this;
        console.log('filtro de juegos por categoria prototipo');
        this._gameService.getGamesByCategory('prototype').subscribe(function (data) {
            _this.games = data;
            _this.tittle = "Categoria Prototipo";
        });
    };
    GameContainerComponent.prototype.getGamesByPopular = function () {
        console.log('filtro de juegos por los mas populares');
    };
    GameContainerComponent.prototype.getGamesByAproved = function () {
        var _this = this;
        console.log('filtro de juegos por los aprovados');
        this._gameService.getGamesAproved(true).subscribe(function (data) {
            _this.games = data;
            _this.tittle = "Juegoa Aprobados por la comunidad";
        });
    };
    GameContainerComponent = __decorate([
        core_1.Component({
            selector: 'game-container',
            templateUrl: 'app/game/gameContainer.component.html',
            providers: [services_1.GameService]
        }), 
        __metadata('design:paramtypes', [services_1.GameService])
    ], GameContainerComponent);
    return GameContainerComponent;
}());
exports.GameContainerComponent = GameContainerComponent;
//# sourceMappingURL=gameContainer.component.js.map