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
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.api_url = "http://localhost:5000/api/users";
    }
    // para obtener la lista de todos los usuarios
    UserService.prototype.getUsers = function () {
        return this.http.get(this.api_url).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserByName = function (name) {
        return this.http.get(this.api_url + '/' + name).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this.api_url + '/' + id).map(function (res) { return res.json(); });
    };
    // para registrar un nuevo usuario en la DB
    UserService.prototype.addUser = function (name, email, pass) {
        var user = "name=" + name + "&email=" + email + "&password=" + pass;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://localhost:5000/api/users", user, { headers: headers })
            .map(function (response) {
            var userR = response.json();
            if (userR && userR.token) {
                localStorage.setItem('currentUser', JSON.stringify(userR));
            }
        });
    };
    UserService.prototype.updateUser = function (name, lastName, email, id) {
        var user = "name=" + name + "&lastName=" + lastName + "&email=" + email;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.put(this.api_url + '/' + id, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    // para autenticar a un usuario
    UserService.prototype.authUser = function (username, password) {
        var user = "name=" + username + "&password=" + password;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://localhost:5000/api/auth', user, { headers: headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var userR = response.json();
            if (userR && userR.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(userR));
            }
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map