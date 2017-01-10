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
var UserGameComponent = (function () {
    function UserGameComponent(_gameService, _protectService, _router) {
        this._gameService = _gameService;
        this._protectService = _protectService;
        this._router = _router;
    }
    UserGameComponent.prototype.ngOnInit = function () {
        if (this._protectService.currentUserLogged()) {
            this.user = JSON.parse(localStorage.getItem('currentUser'));
            this.getGamesByUser();
        }
        else {
            this._router.navigateByUrl('/userLogin');
        }
    };
    UserGameComponent.prototype.getGamesByUser = function () {
        var _this = this;
        this._gameService.getGameByUserName(this.user.name).subscribe(function (data) {
            _this.games = data;
        }, function (error) { });
    };
    UserGameComponent = __decorate([
        core_1.Component({
            selector: 'user-game',
            templateUrl: 'app/user/userGames.component.html',
            providers: [services_1.GameService, services_1.ProtectService]
        }), 
        __metadata('design:paramtypes', [services_1.GameService, services_1.ProtectService, router_1.Router])
    ], UserGameComponent);
    return UserGameComponent;
}());
exports.UserGameComponent = UserGameComponent;
//# sourceMappingURL=userGames.component.js.map