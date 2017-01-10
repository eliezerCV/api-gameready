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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var GameService = (function () {
    function GameService(http) {
        this.http = http;
        this.apiUrl = "http://localhost:5000/api/games";
    }
    GameService.prototype.getGames = function () {
        return this.http.get(this.apiUrl).map(function (res) { return res.json(); });
    };
    GameService.prototype.getGameByUserName = function (name) {
        return this.http.get(this.apiUrl + '?userAuthor=' + name).map(function (res) { return res.json(); });
    };
    GameService.prototype.getGamesByCategory = function (category) {
        return this.http.get(this.apiUrl + '?category=' + category).map(function (res) { return res.json(); });
    };
    GameService.prototype.getGamesAproved = function (aproved) {
        return this.http.get(this.apiUrl + '?aproved=' + aproved).map(function (res) { return res.json(); });
    };
    GameService.prototype.getgameById = function (id) {
        return this.http.get(this.apiUrl + '/' + id).map(function (res) { return res.json(); });
    };
    GameService.prototype.searchGames = function (elem) {
        return this.http.get(this.apiUrl + '?reg=' + elem).map(function (res) { return res.json(); });
    };
    GameService.prototype.addGamePost = function (game) {
        var gamedata = "title=" + game.title + "&genre=" + game.genre + "&platforms="
            + game.platforms + "&languages=" + game.languages + "&players=" + game.players + "&description="
            + game.description + "&userAuthor=" + game.userAuthor + "&category=" + game.category;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.apiUrl, gamedata, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    GameService.prototype.addPunctuationGame = function (punctuation, id) {
        var user = "punctuation=" + punctuation;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.put(this.apiUrl + '/' + id, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    GameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map