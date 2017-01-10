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
var router_1 = require('@angular/router');
var services_1 = require('../services');
var UserLoginComponent = (function () {
    function UserLoginComponent(_router, _userService) {
        this.usuario = {};
        this.router = _router;
        this.userService = _userService;
        this.err = false;
    }
    UserLoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.authUser(this.usuario.username, this.usuario.password).subscribe(function (data) {
            _this.router.navigateByUrl('/home');
        }, function (err) {
        });
    };
    UserLoginComponent.prototype.alertQuit = function () {
        this.err = false;
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            selector: 'userLogin',
            templateUrl: 'app/user/userLogin.component.html',
            providers: [services_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, services_1.UserService])
    ], UserLoginComponent);
    return UserLoginComponent;
}());
exports.UserLoginComponent = UserLoginComponent;
//# sourceMappingURL=userLogin.component.js.map