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
var DiscutionContainerComponent = (function () {
    function DiscutionContainerComponent(_discutionService) {
        this._discutionService = _discutionService;
    }
    DiscutionContainerComponent.prototype.ngOnInit = function () {
        this.getDiscutions();
    };
    DiscutionContainerComponent.prototype.getDiscutions = function () {
        var _this = this;
        this._discutionService.getDiscutions().subscribe(function (data) {
            _this.discutions = data;
        }, function (error) {
        });
    };
    DiscutionContainerComponent = __decorate([
        core_1.Component({
            selector: 'discutions',
            templateUrl: 'app/discuttion/discutionContainer.component.html',
            providers: [services_1.DiscutionService]
        }), 
        __metadata('design:paramtypes', [services_1.DiscutionService])
    ], DiscutionContainerComponent);
    return DiscutionContainerComponent;
}());
exports.DiscutionContainerComponent = DiscutionContainerComponent;
//# sourceMappingURL=discutionContainer.component.js.map