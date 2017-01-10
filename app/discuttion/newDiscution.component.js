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
var NewDiscutionComponent = (function () {
    function NewDiscutionComponent(_discutionService, _router) {
        this._discutionService = _discutionService;
        this._router = _router;
        this.discution = {};
        this.author = {};
    }
    NewDiscutionComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser')) {
            this.author = localStorage.getItem('currentUser');
        }
        else
            this.author.name = "admin";
    };
    NewDiscutionComponent.prototype.sendDiscution = function () {
        console.log(this.discution);
        console.log(this.author.name);
        this._discutionService.addDiscution(this.discution.tittle, this.discution.decription, this.author.name).subscribe();
        this._router.navigateByUrl('/discutions');
    };
    NewDiscutionComponent = __decorate([
        core_1.Component({
            selector: 'new-discution',
            templateUrl: 'app/discuttion/newDiscution.component.html',
            providers: [services_1.DiscutionService]
        }), 
        __metadata('design:paramtypes', [services_1.DiscutionService, router_1.Router])
    ], NewDiscutionComponent);
    return NewDiscutionComponent;
}());
exports.NewDiscutionComponent = NewDiscutionComponent;
//# sourceMappingURL=newDiscution.component.js.map