System.register(['@angular/core', './services/getService.service'], function(exports_1, context_1) {
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
    var core_1, getService_service_1;
    var BottomList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (getService_service_1_1) {
                getService_service_1 = getService_service_1_1;
            }],
        execute: function() {
            BottomList = (function () {
                function BottomList(gettingLength) {
                    this.gettingLength = gettingLength;
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
                ;
                BottomList = __decorate([
                    core_1.Component({
                        selector: 'bottom-list',
                        template: "\n        <div class=\"blist\">\n            <div class=\"blist_each\" *ngFor=\"#item of bottomLists\">\n               <div class=\"blist_each_img\">\n                 <div class=\"blist_each_img_ic\">\n                    <img src=\"{{item.imageU}} \">\n                 </div>\n               </div>\n               <div class=\"blist_each_t-box\">\n                    <div class=\"blist_each_t-box_1\">{{item.store}}</div> \n                    <div class=\"blist_each_t-box_2\">{{item.count}} near this listing</div>\n                    \n               </div>\n               <div class=\"blist_each_see-all\"> See All <i class=\"fa fa-angle-right\" style=\"float: right\" aria-hidden=\"true\"></i>\n</div>\n            </div>\n        </div>\n    ",
                        styleUrls: ['src/css/bottom-list.css'],
                    }), 
                    __metadata('design:paramtypes', [getService_service_1.GetService])
                ], BottomList);
                return BottomList;
            }());
            exports_1("BottomList", BottomList);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdHRvbUxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkJBO2dCQUtJLG9CQUFvQixhQUF3QjtvQkFBeEIsa0JBQWEsR0FBYixhQUFhLENBQVc7b0JBRzVDLGdCQUFXLEdBQUcsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsYUFBYTs0QkFDcEIsTUFBTSxFQUFFLDBCQUEwQjs0QkFDbEMsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlO3lCQUM5Qjt3QkFDRzs0QkFDSSxLQUFLLEVBQUUsZ0JBQWdCOzRCQUN2QixNQUFNLEVBQUUsMEJBQTBCOzRCQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7eUJBQzNCO3dCQUNEOzRCQUNJLEtBQUssRUFBRSxPQUFPOzRCQUNkLE1BQU0sRUFBRSwwQkFBMEI7NEJBQ2xDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUzt5QkFDeEI7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFFLGlCQUFpQjs0QkFDeEIsTUFBTSxFQUFFLDJCQUEyQjs0QkFDbkMsS0FBSyxFQUFFLElBQUk7eUJBQ2Q7cUJBQ0osQ0FBQztnQkF0QkYsQ0FBQzs7Z0JBN0JMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLGFBQWE7d0JBQ3RCLFFBQVEsRUFBQyxzdkJBaUJSO3dCQUNELFNBQVMsRUFBQyxDQUFDLHlCQUF5QixDQUFDO3FCQUN4QyxDQUFDOzs4QkFBQTtnQkErQkYsaUJBQUM7WUFBRCxDQTdCQSxBQTZCQyxJQUFBO1lBN0JELG1DQTZCQyxDQUFBIiwiZmlsZSI6ImJvdHRvbUxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG5hdnlhZWV0YXJhbSBvbiA2LzE3LzE2LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnR7R2V0U2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9nZXRTZXJ2aWNlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonYm90dG9tLWxpc3QnLFxuICAgIHRlbXBsYXRlOmBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJsaXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxpc3RfZWFjaFwiICpuZ0Zvcj1cIiNpdGVtIG9mIGJvdHRvbUxpc3RzXCI+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxpc3RfZWFjaF9pbWdcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsaXN0X2VhY2hfaW1nX2ljXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3tpdGVtLmltYWdlVX19IFwiPlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsaXN0X2VhY2hfdC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsaXN0X2VhY2hfdC1ib3hfMVwiPnt7aXRlbS5zdG9yZX19PC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxpc3RfZWFjaF90LWJveF8yXCI+e3tpdGVtLmNvdW50fX0gbmVhciB0aGlzIGxpc3Rpbmc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibGlzdF9lYWNoX3NlZS1hbGxcIj4gU2VlIEFsbCA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCIgc3R5bGU9XCJmbG9hdDogcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczpbJ3NyYy9jc3MvYm90dG9tLWxpc3QuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQm90dG9tTGlzdCB7XG4gICAgcmVzdGF1cmFudENvdW50Om51bWJlcjtcbiAgICBncm9jZXJ5Q291bnQ6bnVtYmVyO1xuICAgIGJhbmtDb3VudDpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdldHRpbmdMZW5ndGg6R2V0U2VydmljZSkge1xuICAgIH07XG5cbiAgICBib3R0b21MaXN0cyA9IFt7XG4gICAgICAgIHN0b3JlOiAnUmVzdGF1cmFudHMnLFxuICAgICAgICBpbWFnZVU6ICcuLi9pbWFnZXMvcmVzdF9ibGFjay5wbmcnLFxuICAgICAgICBjb3VudDogdGhpcy5yZXN0YXVyYW50Q291bnQsXG4gICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3RvcmU6ICdHcm9jZXJ5IFN0b3JlcycsXG4gICAgICAgICAgICBpbWFnZVU6ICcuLi9pbWFnZXMvZ3JvY19ibGFjay5wbmcnLFxuICAgICAgICAgICAgY291bnQ6IHRoaXMuZ3JvY2VyeUNvdW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzdG9yZTogJ0JhbmtzJyxcbiAgICAgICAgICAgIGltYWdlVTogJy4uL2ltYWdlcy9iYW5rX2JsYWNrLnBuZycsXG4gICAgICAgICAgICBjb3VudDogdGhpcy5iYW5rQ291bnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0b3JlOiAnT3RoZXIgQW1lbml0aWVzJyxcbiAgICAgICAgICAgIGltYWdlVTogJy4uL2ltYWdlcy9vdGhlcl9ibGFjay5wbmcnLFxuICAgICAgICAgICAgY291bnQ6ICcjIycsXG4gICAgICAgIH1cbiAgICBdO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
