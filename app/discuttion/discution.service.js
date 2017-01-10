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
var DiscutionService = (function () {
    function DiscutionService(_http) {
        this._http = _http;
        this.apiUrl = "http://localhost:5000/api/discutions";
    }
    DiscutionService.prototype.getDiscutions = function () {
        return this._http.get(this.apiUrl).map(function (res) { return res.json(); });
    };
    DiscutionService.prototype.getDiscutionById = function (id) {
        return this._http.get(this.apiUrl + '/' + id).map(function (res) { return res.json(); });
    };
    DiscutionService.prototype.addDiscution = function (tittle, desc, author) {
        var discution = "title=" + tittle + "&description=" + desc + "&author=" + author;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.apiUrl, discution, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    DiscutionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DiscutionService);
    return DiscutionService;
}());
exports.DiscutionService = DiscutionService;
//# sourceMappingURL=discution.service.js.map