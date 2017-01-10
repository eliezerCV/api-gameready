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
var CommentContainerComponent = (function () {
    function CommentContainerComponent(_commentService) {
        this._commentService = _commentService;
        this.titulo = "Contenedor de comentarios";
    }
    CommentContainerComponent.prototype.ngOnInit = function () {
        this.getComments();
    };
    CommentContainerComponent.prototype.getComments = function () {
        var _this = this;
        this._commentService.getCommentsById(this.idPublication).subscribe(function (data) {
            _this.comments = data;
        }, function (err) { });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CommentContainerComponent.prototype, "idPublication", void 0);
    CommentContainerComponent = __decorate([
        core_1.Component({
            selector: 'comment-container',
            templateUrl: 'app/comment/commentsContainer.component.html',
            providers: [services_1.CommentService]
        }), 
        __metadata('design:paramtypes', [services_1.CommentService])
    ], CommentContainerComponent);
    return CommentContainerComponent;
}());
exports.CommentContainerComponent = CommentContainerComponent;
//# sourceMappingURL=commentsContainer.component.js.map