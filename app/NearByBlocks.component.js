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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5lYXJCeUJsb2Nrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsQ0FBQztvQkFDcEMsbUJBQWMsR0FBQzt3QkFDQzs0QkFDSSxJQUFJLEVBQUMsWUFBWTs0QkFDakIsS0FBSyxFQUFDLGFBQWE7NEJBQ25CLFFBQVEsRUFBQywyQkFBMkI7eUJBQ3RDO3dCQUNGOzRCQUNLLElBQUksRUFBQyxTQUFTOzRCQUNkLEtBQUssRUFBQyxXQUFXOzRCQUNqQixRQUFRLEVBQUMseUJBQXlCO3lCQUNyQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUMsT0FBTzs0QkFDWixLQUFLLEVBQUMsT0FBTzs0QkFDYixRQUFRLEVBQUMscUJBQXFCO3lCQUNsQztxQkFDQSxDQUFDO29CQUNsQixlQUFVLEdBQUUsSUFBSSxtQkFBWSxFQUFtRCxDQUFDO2dCQU9wRixDQUFDO2dCQU5HLHFDQUFXLEdBQVgsVUFBWSxFQUFFO29CQUNWLElBQUksQ0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFDO29CQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBMUNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLFNBQVM7d0JBQ2xCLFFBQVEsRUFBQyxtakJBV1I7d0JBQ0QsU0FBUyxFQUFDLENBQUMscUJBQXFCLENBQUM7d0JBQ2pDLE9BQU8sRUFBQyxDQUFDLFlBQVksQ0FBQztxQkFDekIsQ0FBQzs7bUNBQUE7Z0JBNEJGLHNCQUFDO1lBQUQsQ0ExQkEsQUEwQkMsSUFBQTtZQTFCRCw2Q0EwQkMsQ0FBQSIsImZpbGUiOiJOZWFyQnlCbG9ja3MuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG5hdnlhZWV0YXJhbSBvbiA2LzE2LzE2LlxuICovXG5pbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonbmVhci1ieScsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1ibG9ja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyZWVuLWJcIj48aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXVwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmItYmxvY2tcIiAqbmdGb3I9XCIjaXRlbSBvZiBhbWVuaXRpZXNfbGlzdFwiIChjbGljayk9XCJvbkNsaWNrVGlsZShpdGVtKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYi1ibG9ja19pY29uXCI+PGltZyBzcmM9e3tpdGVtLmltYWdlVXJsfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5iLWJsb2NrX3RleHRcIj5OZWFyYnkge3tpdGVtLnRpdGxlfX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyZWVuLWJcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHhcIj48aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIiAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOlsnc3JjL2Nzcy9uZWFyLWJ5LmNzcyddLFxuICAgIG91dHB1dHM6WydjbGlja0Jsb2NrJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgTmVhckJ5Q29tcG9uZW50e1xuICAgIHR5cGU9e25hbWU6JycsdGl0bGU6JycsaW1hZ2VVcmw6Jyd9O1xuICAgIGFtZW5pdGllc19saXN0PVtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToncmVzdGF1cmFudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTonUmVzdGF1cmFudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6XCIuLi9pbWFnZXMvcmVzdGF1cmFudHMucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTonZ3JvY2VycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6J0dyb2NlcmllcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6XCIuLi9pbWFnZXMvZ3JvY2VyaWVzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6J2JhbmtzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTonQmFua3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOlwiLi4vaW1hZ2VzL0JhbmtzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgY2xpY2tCbG9jaz0gbmV3IEV2ZW50RW1pdHRlcjx7bmFtZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBpbWFnZVVybDogc3RyaW5nfT4oKTtcbiAgICBvbkNsaWNrVGlsZShpZCl7XG4gICAgICAgIHRoaXMudHlwZT1pZDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50eXBlKTtcbiAgICAgICAgdGhpcy5jbGlja0Jsb2NrLmVtaXQodGhpcy50eXBlKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
