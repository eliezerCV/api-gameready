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
var SearchGameComponent = (function () {
    function SearchGameComponent(_gameService, _router) {
        this._gameService = _gameService;
        this._router = _router;
        this.search = {};
        this.foundGames = {};
        this.games = false;
    }
    SearchGameComponent.prototype.sendSearch = function (val) {
        var _this = this;
        if (val == '') {
            this.games = false;
            return;
        }
        this._gameService.searchGames(val).subscribe(function (data) {
            _this.foundGames = data;
            _this.games = true;
        });
        for (var _i = 0, _a = this.foundGames; _i < _a.length; _i++) {
            var g = _a[_i];
            console.log(g.title);
        }
    };
    SearchGameComponent = __decorate([
        core_1.Component({
            selector: 'search-game',
            templateUrl: 'app/game/searchGame.component.html',
            providers: [services_1.GameService]
        }), 
        __metadata('design:paramtypes', [services_1.GameService, router_1.Router])
    ], SearchGameComponent);
    return SearchGameComponent;
}());
exports.SearchGameComponent = SearchGameComponent;
//# sourceMappingURL=searchGame.component.js.map