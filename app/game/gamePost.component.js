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
var router_1 = require('@angular/router');
var GamePostComponent = (function () {
    function GamePostComponent(_gameService, _router) {
        this._gameService = _gameService;
        this._router = _router;
        this.game = {};
        if (!localStorage.getItem('currentUser')) {
            this._router.navigateByUrl('/userLogin');
        }
    }
    GamePostComponent.prototype.saveGame = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.game.userAuthor = this.user.name;
        this._gameService.addGamePost(this.game).subscribe(function (data) {
            _this._router.navigateByUrl('/home');
        }, function (error) { });
    };
    GamePostComponent = __decorate([
        core_1.Component({
            selector: 'game-post',
            templateUrl: 'app/game/gamePost.component.html',
            providers: [services_1.GameService]
        }), 
        __metadata('design:paramtypes', [services_1.GameService, router_1.Router])
    ], GamePostComponent);
    return GamePostComponent;
}());
exports.GamePostComponent = GamePostComponent;
//# sourceMappingURL=gamePost.component.js.map