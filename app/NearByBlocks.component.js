System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var NearByComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NearByComponent = (function () {
                function NearByComponent() {
                    this.type = { name: '', title: '', imageUrl: '' };
                    this.amenities_list = [
                        {
                            name: 'restaurant',
                            title: 'Restaurants',
                            imageUrl: "../images/restaurants.png",
                        },
                        {
                            name: 'grocers',
                            title: 'Groceries',
                            imageUrl: "../images/groceries.png"
                        },
                        {
                            name: 'banks',
                            title: 'Banks',
                            imageUrl: "../images/Banks.png"
                        },
                    ];
                    this.clickBlock = new core_1.EventEmitter();
                }
                NearByComponent.prototype.onClickTile = function (id) {
                    this.type = id;
                    console.log(this.type);
                    this.clickBlock.emit(this.type);
                };
                NearByComponent = __decorate([
                    core_1.Component({
                        selector: 'near-by',
                        template: "\n       <div class=\"right-block\">\n            <div class=\"green-b\"><i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i>\n</div>\n            <div class=\"nb-block\" *ngFor=\"#item of amenities_list\" (click)=\"onClickTile(item)\">\n                <div class=\"nb-block_icon\"><img src={{item.imageUrl}}></div>\n                <div class=\"nb-block_text\">Nearby {{item.title}}</div>\n            </div>\n            <div class=\"green-b\" style=\"margin-top: 10px\"><i class=\"fa fa-angle-down\"  aria-hidden=\"true\"></i>\n</div>\n        </div>\n    ",
                        styleUrls: ['src/css/near-by.css'],
                        outputs: ['clickBlock'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], NearByComponent);
                return NearByComponent;
            }());
            exports_1("NearByComponent", NearByComponent);
        }
    }
});
//# sourceMappingURL=NearByBlocks.component.js.map