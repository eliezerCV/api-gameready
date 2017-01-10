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
var UserProfileComponent = (function () {
    function UserProfileComponent(_router, _userService, _protectService) {
        this._router = _router;
        this._userService = _userService;
        this._protectService = _protectService;
        this.user = {};
        this.currentUser = {};
        this.isLogged = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLogged = this._protectService.currentUserLogged();
        if (this.isLogged) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.user.userId = this.currentUser.userId;
        }
        else {
            this._router.navigateByUrl('/userLogin');
        }
        this._userService.getUserByName(this.currentUser.name).subscribe(function (data) {
            _this.user = data;
        }, function (error) { });
    };
    UserProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        this._userService.updateUser(this.user.name, this.user.lastName, this.user.email, this.currentUser.userId).subscribe(function (data) {
            _this._router.navigateByUrl('/userProfile');
        }, function (error) { });
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'user-profile',
            templateUrl: 'app/user/userProfile.component.html',
            providers: [services_1.UserService, services_1.ProtectService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, services_1.UserService, services_1.ProtectService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=userProfile.component.js.map