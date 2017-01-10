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
var ShowGamePosted = (function () {
    function ShowGamePosted(_gameService, _route) {
        this._gameService = _gameService;
        this._route = _route;
        this.game = {};
    }
    ShowGamePosted.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.idGame = params['id'];
        });
        this.getGame();
    };
    ShowGamePosted.prototype.getGame = function () {
        var _this = this;
        this._gameService.getgameById(this.idGame).subscribe(function (data) {
            _this.game = data;
        }, function (error) { });
    };
    ShowGamePosted = __decorate([
        core_1.Component({
            selector: 'game-posted',
            templateUrl: 'app/game/showGamePosted.component.html',
            providers: [services_1.GameService]
        }), 
        __metadata('design:paramtypes', [services_1.GameService, router_1.ActivatedRoute])
    ], ShowGamePosted);
    return ShowGamePosted;
}());
exports.ShowGamePosted = ShowGamePosted;
//# sourceMappingURL=showGamePosted.component.js.map