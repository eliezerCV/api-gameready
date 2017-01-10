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
var CommentService = (function () {
    function CommentService(_http) {
        this._http = _http;
        this.apiUrl = "http://localhost:5000/api/comments";
    }
    CommentService.prototype.getCommentsById = function (id) {
        return this._http.get(this.apiUrl + '/' + id).map(function (res) { return res.json(); });
    };
    CommentService.prototype.getCommentsByName = function (name) {
        return this._http.get(this.apiUrl + '?author=' + name).map(function (res) { return res.json(); });
    };
    CommentService.prototype.addNewComment = function (id, name, comment) {
        var body = "idPublication=" + id + "&author=" + name + "&content=" + comment;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.apiUrl, body, { headers: headers }).map(function (res) {
            res.json();
        });
    };
    CommentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CommentService);
    return CommentService;
}());
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map