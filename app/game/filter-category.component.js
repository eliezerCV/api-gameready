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
var FilterCategoryComponent = (function () {
    function FilterCategoryComponent(router) {
        this.router = router;
        this.getGamesByCategoryGame = new core_1.EventEmitter();
        this.getGamesByCategoryPrototype = new core_1.EventEmitter();
        this.getGamesByMostPopular = new core_1.EventEmitter();
        this.getGamesByAproved = new core_1.EventEmitter();
        this.getGamesByRecent = new core_1.EventEmitter();
    }
    FilterCategoryComponent.prototype.filterByGame = function () {
        this.getGamesByCategoryGame.emit();
    };
    FilterCategoryComponent.prototype.filterByPrototype = function () {
        this.getGamesByCategoryPrototype.emit();
    };
    FilterCategoryComponent.prototype.filterByPopular = function () {
        this.getGamesByMostPopular.emit();
    };
    FilterCategoryComponent.prototype.filterByAproved = function () {
        this.getGamesByAproved.emit();
    };
    FilterCategoryComponent.prototype.filterByRecent = function () {
        this.getGamesByRecent.emit();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FilterCategoryComponent.prototype, "getGamesByCategoryGame", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FilterCategoryComponent.prototype, "getGamesByCategoryPrototype", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FilterCategoryComponent.prototype, "getGamesByMostPopular", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FilterCategoryComponent.prototype, "getGamesByAproved", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FilterCategoryComponent.prototype, "getGamesByRecent", void 0);
    FilterCategoryComponent = __decorate([
        core_1.Component({
            selector: 'filter-category',
            templateUrl: 'app/game/filter-category.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], FilterCategoryComponent);
    return FilterCategoryComponent;
}());
exports.FilterCategoryComponent = FilterCategoryComponent;
//# sourceMappingURL=filter-category.component.js.map