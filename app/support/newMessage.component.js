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
//servicio
var NewMessageSupport = (function () {
    function NewMessageSupport() {
        this.emptyData = false;
        this.sendMessage = false;
        this.message = {};
    }
    NewMessageSupport.prototype.sendMessageSupport = function () {
        if (this.message.content == null)
            this.emptyData = true;
        else {
            this.sendMessage = true;
            this.message == null;
        }
    };
    NewMessageSupport.prototype.alertQuit = function () {
        this.emptyData = !this.emptyData;
    };
    NewMessageSupport.prototype.succesQuit = function () {
        this.sendMessage = !this.sendMessage;
    };
    NewMessageSupport = __decorate([
        core_1.Component({
            selector: 'new-support',
            templateUrl: 'app/support/newMessage.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NewMessageSupport);
    return NewMessageSupport;
}());
exports.NewMessageSupport = NewMessageSupport;
//# sourceMappingURL=newMessage.component.js.map