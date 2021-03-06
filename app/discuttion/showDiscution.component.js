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
var ShowDiscutionComponent = (function () {
    function ShowDiscutionComponent(_discutionService, _router) {
        this._discutionService = _discutionService;
        this._router = _router;
        this.discution = {};
    }
    ShowDiscutionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        if (this.id != null) {
            this.getDiscution();
        }
    };
    ShowDiscutionComponent.prototype.getDiscution = function () {
        var _this = this;
        this._discutionService.getDiscutionById(this.id).subscribe(function (data) {
            _this.discution = data;
        });
    };
    ShowDiscutionComponent = __decorate([
        core_1.Component({
            selector: 'show-discution',
            templateUrl: 'app/discuttion/showDiscution.component.html',
            providers: [services_1.DiscutionService]
        }), 
        __metadata('design:paramtypes', [services_1.DiscutionService, router_1.ActivatedRoute])
    ], ShowDiscutionComponent);
    return ShowDiscutionComponent;
}());
exports.ShowDiscutionComponent = ShowDiscutionComponent;
//# sourceMappingURL=showDiscution.component.js.map