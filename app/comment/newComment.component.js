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
var NewComment = (function () {
    function NewComment(_commentService, _protectService) {
        this._commentService = _commentService;
        this._protectService = _protectService;
        this.getComments = new core_1.EventEmitter();
        this.user = {};
        this.alert = false;
    }
    NewComment.prototype.ngOnInit = function () {
        this.isLogged = this._protectService.currentUserLogged();
        if (this.isLogged) {
            this.user = JSON.parse(localStorage.getItem('currentUser'));
            this.name = this.user.name;
        }
        else {
            this.name = "admin";
        }
    };
    NewComment.prototype.addNewComment = function () {
        if (this.comment != null) {
            this._commentService.addNewComment(this.idPublication, this.name, this.comment).subscribe();
            this.getComments.emit();
            this.comment = null;
        }
        else {
            this.alert = true;
        }
    };
    NewComment.prototype.alertQuit = function () {
        this.alert = !this.alert;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NewComment.prototype, "idPublication", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewComment.prototype, "getComments", void 0);
    NewComment = __decorate([
        core_1.Component({
            selector: 'new-comment',
            templateUrl: 'app/comment/newComment.component.html',
            providers: [services_1.CommentService, services_1.ProtectService]
        }), 
        __metadata('design:paramtypes', [services_1.CommentService, services_1.ProtectService])
    ], NewComment);
    return NewComment;
}());
exports.NewComment = NewComment;
//# sourceMappingURL=newComment.component.js.map