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
var user_service_1 = require('./user.service');
var UserRegisterComponent = (function () {
    function UserRegisterComponent(_router, _userService) {
        this.user = {};
        this.router = _router;
        this.userService = _userService;
    }
    UserRegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.userService.addUser(this.user.name, this.user.email, this.user.pass).subscribe(function (data) {
            _this.router.navigateByUrl('/home');
        }, function (error) { });
    };
    UserRegisterComponent = __decorate([
        core_1.Component({
            selector: 'userRegister',
            templateUrl: 'app/user/userRegister.component.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());
exports.UserRegisterComponent = UserRegisterComponent;
//# sourceMappingURL=userRegister.component.js.map