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
    var BottomList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BottomList = (function () {
                function BottomList() {
                    this.restaurantCount = '';
                    this.groceryCount = '';
                    this.bankCount = '';
                    this.bottomLists = [{
                            store: 'Restaurants',
                            imageU: '../images/rest_black.png',
                            count: this.restaurantCount,
                        },
                        {
                            store: 'Grocery Stores',
                            imageU: '../images/groc_black.png',
                            count: this.groceryCount,
                        },
                        {
                            store: 'Banks',
                            imageU: '../images/bank_black.png',
                            count: this.bankCount,
                        },
                        {
                            store: 'Other Amenities',
                            imageU: '../images/other_black.png',
                            count: '##',
                        }
                    ];
                }
                BottomList = __decorate([
                    core_1.Component({
                        selector: 'bottom-list',
                        template: "\n        <div class=\"blist\">\n            <div class=\"blist_each\" *ngFor=\"#item of bottomLists\">\n               <div class=\"blist_each_img\">\n                 <div class=\"blist_each_img_ic\">\n                    <img src=\"{{item.imageU}} \">\n                 </div>\n               </div>\n               <div class=\"blist_each_t-box\">\n                    <div class=\"blist_each_t-box_1\">{{item.store}}</div> \n                    <div class=\"blist_each_t-box_2\">{{item.count}} near this listing</div>\n                    \n               </div>\n               <div class=\"blist_each_see-all\"> See All <i class=\"fa fa-angle-right\" style=\"float: right\" aria-hidden=\"true\"></i>\n</div>\n            </div>\n        </div>\n    ",
                        styleUrls: ['src/css/bottom-list.css'],
                        inputs: ['restaurantCount', 'groceryCount', 'bankCount'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], BottomList);
                return BottomList;
            }());
            exports_1("BottomList", BottomList);
        }
    }
});
//# sourceMappingURL=bottomList.component.js.map