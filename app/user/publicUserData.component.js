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
var PublicUserData = (function () {
    function PublicUserData(_userService, _router, _gameService, _commentService) {
        this._userService = _userService;
        this._router = _router;
        this._gameService = _gameService;
        this._commentService = _commentService;
        this.user = {};
    }
    PublicUserData.prototype.ngOnInit = function () {
        var _this = this;
        this._router.params.subscribe(function (params) {
            _this.userName = params['name'];
        });
        this.getUser();
        this.getUserGames();
        this.getUserComments();
    };
    PublicUserData.prototype.onChange = function (event) {
        var files = event.srcElement.files;
        console.log(files);
    };
    PublicUserData.prototype.getUser = function () {
        var _this = this;
        this._userService.getUserByName(this.userName).subscribe(function (data) {
            _this.user = data;
        });
    };
    PublicUserData.prototype.getUserGames = function () {
        var _this = this;
        this._gameService.getGameByUserName(this.userName).subscribe(function (data) {
            _this.userGames = data;
        });
    };
    PublicUserData.prototype.getUserComments = function () {
        var _this = this;
        this._commentService.getCommentsByName(this.userName).subscribe(function (data) {
            _this.userComments = data;
        });
    };
    PublicUserData = __decorate([
        core_1.Component({
            selector: 'public-user',
            templateUrl: 'app/user/publicUserData.component.html',
            providers: [services_1.UserService, services_1.GameService, services_1.CommentService]
        }), 
        __metadata('design:paramtypes', [services_1.UserService, router_1.ActivatedRoute, services_1.GameService, services_1.CommentService])
    ], PublicUserData);
    return PublicUserData;
}());
exports.PublicUserData = PublicUserData;
//# sourceMappingURL=publicUserData.component.js.map