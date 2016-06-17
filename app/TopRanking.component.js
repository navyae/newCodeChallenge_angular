System.register(['@angular/core', './services/getService.service', "./bottomList.component"], function(exports_1, context_1) {
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
    var core_1, getService_service_1, bottomList_component_1;
    var TopRanking;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (getService_service_1_1) {
                getService_service_1 = getService_service_1_1;
            },
            function (bottomList_component_1_1) {
                bottomList_component_1 = bottomList_component_1_1;
            }],
        execute: function() {
            TopRanking = (function () {
                function TopRanking(gettingService) {
                    this.gettingService = gettingService;
                    this.initial = { name: 'restaurant', title: 'Restaurant' };
                    this.type = { name: '', title: '', imageUrl: '' };
                    this.initial_value = 0;
                }
                TopRanking.prototype.ngOnInit = function () {
                    var _this = this;
                    this.gettingService.getData()
                        .subscribe(function (data) {
                        _this.amenity_image = data[_this.type.name || _this.initial.name].businesses[_this.initial_value].image_url;
                        _this.city = data[_this.type.name || _this.initial.name].businesses[_this.initial_value].location.city;
                        _this.address = data[_this.type.name || _this.initial.name].businesses[_this.initial_value].location.display_address[0];
                        _this.state = data[_this.type.name || _this.initial.name].businesses[_this.initial_value].location.display_address[1];
                        _this.list_length = data[_this.type.name || _this.initial.name].businesses.length;
                    }, function (error) { return console.error(error); });
                };
                TopRanking.prototype.newData = function () {
                    var _this = this;
                    this.gettingService.getData()
                        .subscribe(function (data) {
                        _this.amenity_image = data[_this.type.name || _this.initial.name].businesses[_this.initial_value].image_url;
                        _this.city = data[_this.type.name || _this.initial.name].businesses[_this.initial_value].location.city;
                        _this.address = data[_this.type.name || _this.initial.name].businesses[_this.initial_value].location.display_address[0];
                        _this.state = data[_this.type.name || _this.initial.name].businesses[_this.initial_value].location.display_address[1];
                    }, function (error) { return console.error(error); });
                };
                TopRanking.prototype.decrementCount = function () {
                    if (this.initial_value > 0) {
                        this.initial_value--;
                        this.newData();
                    }
                };
                TopRanking.prototype.incrementCount = function () {
                    if (this.initial_value < this.list_length - 1) {
                        ++this.initial_value;
                        this.newData();
                    }
                };
                TopRanking = __decorate([
                    core_1.Component({
                        selector: 'ranking',
                        template: "\n        <div class=\"left-block\">\n            <div class=\"left-block_top-rectangle\">\n                <div class=\"left-block_top-rectangle_title\">What's the highest rated {{type.title||initial.title}} in this area?</div>\n                \n                <div class=\"left-block_top-rectangle_location\">\n                    <span class=\"left-block_top-rectangle_map\">\n                        <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                    </span>{{city}}</div>\n                <div class=\"left-block_top-rectangle_img\">\n                    <div class=\"left-block_top-rectangle_img_left-arc\" (click)=\"decrementCount()\">\n                        <div class=\"left-block_top-rectangle_img_left-arc_arrow\">\n                            <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        </div>\n                    </div>\n                    <div class=\"left-block_top-rectangle_img_circle\"><img src=\"{{amenity_image}}\" width=\"100%\" height=\"100%\"></div>\n                    \n                    <div class=\"left-block_top-rectangle_img_right-arc\" (click)=\"incrementCount()\">\n                        <div class=\"left-block_top-rectangle_img_right-arc_arrow\">\n                            <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"left-block_top-rectangle_establishment\">{{address}}</div>\n                <div class=\"left-block_top-rectangle_est-loc\">{{state}}</div>\n                <div class=\"left-block_top-rectangle_stl-button\">\n                    <div class=\"left-block_top-rectangle_stl-button_scircle\">\n                        <div class=\"left-block_top-rectangle_stl-button_scircle_home\">\n                            <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n                         </div>\n                    </div>See The Lists\n                     <div class=\"left-block_top-rectangle_stl-button_angle\">\n                        <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n                    </div>\n                </div>\n                    \n            </div>\n            <div class=\"left-block_caret\"></div>\n            <bottom-list></bottom-list>\n        </div>\n        \n    ",
                        styleUrls: ['src/css/ranking.css'],
                        inputs: ['type'],
                        directives: [bottomList_component_1.BottomList],
                    }), 
                    __metadata('design:paramtypes', [getService_service_1.GetService])
                ], TopRanking);
                return TopRanking;
            }());
            exports_1("TopRanking", TopRanking);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUFELENBNURBLEFBNERDLElBQUE7WUE1REQsbUNBNERDLENBQUEiLCJmaWxlIjoiVG9wUmFua2luZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbmF2eWFlZXRhcmFtIG9uIDYvMTYvMTYuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7R2V0U2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9nZXRTZXJ2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHtCb3R0b21MaXN0fSBmcm9tIFwiLi9ib3R0b21MaXN0LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjoncmFua2luZycsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ibG9ja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYmxvY2tfdG9wLXJlY3RhbmdsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJsb2NrX3RvcC1yZWN0YW5nbGVfdGl0bGVcIj5XaGF0J3MgdGhlIGhpZ2hlc3QgcmF0ZWQge3t0eXBlLnRpdGxlfHxpbml0aWFsLnRpdGxlfX0gaW4gdGhpcyBhcmVhPzwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJsb2NrX3RvcC1yZWN0YW5nbGVfbG9jYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsZWZ0LWJsb2NrX3RvcC1yZWN0YW5nbGVfbWFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLW1hcC1tYXJrZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57e2NpdHl9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJsb2NrX3RvcC1yZWN0YW5nbGVfaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJsb2NrX3RvcC1yZWN0YW5nbGVfaW1nX2xlZnQtYXJjXCIgKGNsaWNrKT1cImRlY3JlbWVudENvdW50KClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJsb2NrX3RvcC1yZWN0YW5nbGVfaW1nX2xlZnQtYXJjX2Fycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ibG9ja190b3AtcmVjdGFuZ2xlX2ltZ19jaXJjbGVcIj48aW1nIHNyYz1cInt7YW1lbml0eV9pbWFnZX19XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYmxvY2tfdG9wLXJlY3RhbmdsZV9pbWdfcmlnaHQtYXJjXCIgKGNsaWNrKT1cImluY3JlbWVudENvdW50KClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJsb2NrX3RvcC1yZWN0YW5nbGVfaW1nX3JpZ2h0LWFyY19hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYmxvY2tfdG9wLXJlY3RhbmdsZV9lc3RhYmxpc2htZW50XCI+e3thZGRyZXNzfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ibG9ja190b3AtcmVjdGFuZ2xlX2VzdC1sb2NcIj57e3N0YXRlfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ibG9ja190b3AtcmVjdGFuZ2xlX3N0bC1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYmxvY2tfdG9wLXJlY3RhbmdsZV9zdGwtYnV0dG9uX3NjaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJsb2NrX3RvcC1yZWN0YW5nbGVfc3RsLWJ1dHRvbl9zY2lyY2xlX2hvbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWhvbWVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlNlZSBUaGUgTGlzdHNcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJsb2NrX3RvcC1yZWN0YW5nbGVfc3RsLWJ1dHRvbl9hbmdsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ibG9ja19jYXJldFwiPjwvZGl2PlxuICAgICAgICAgICAgPGJvdHRvbS1saXN0PjwvYm90dG9tLWxpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICBgLFxuICAgIHN0eWxlVXJsczpbJ3NyYy9jc3MvcmFua2luZy5jc3MnXSxcbiAgICBpbnB1dHM6Wyd0eXBlJ10sXG4gICAgZGlyZWN0aXZlczpbQm90dG9tTGlzdF0sXG59KVxuXG5leHBvcnQgY2xhc3MgVG9wUmFua2luZ3tcbiAgICBpbml0aWFsPXtuYW1lOidyZXN0YXVyYW50JywgdGl0bGU6J1Jlc3RhdXJhbnQnfVxuICAgIHR5cGU9e25hbWU6JycsIHRpdGxlOicnLCBpbWFnZVVybDonJ307XG4gICAgYW1lbml0eV9pbWFnZTogc3RyaW5nO1xuICAgIGNpdHk6IHN0cmluZztcbiAgICBhZGRyZXNzOiBzdHJpbmc7XG4gICAgc3RhdGU6IHN0cmluZztcbiAgICBpbml0aWFsX3ZhbHVlOiBudW1iZXIgPTA7XG4gICAgbGlzdF9sZW5ndGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2V0dGluZ1NlcnZpY2U6IEdldFNlcnZpY2Upe31cblxuICAgIG5nT25Jbml0KCl7XG5cbiAgICAgICAgdGhpcy5nZXR0aW5nU2VydmljZS5nZXREYXRhKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YT0+e1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW1lbml0eV9pbWFnZT0gZGF0YVt0aGlzLnR5cGUubmFtZXx8dGhpcy5pbml0aWFsLm5hbWVdLmJ1c2luZXNzZXNbdGhpcy5pbml0aWFsX3ZhbHVlXS5pbWFnZV91cmw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2l0eT1kYXRhW3RoaXMudHlwZS5uYW1lfHx0aGlzLmluaXRpYWwubmFtZV0uYnVzaW5lc3Nlc1t0aGlzLmluaXRpYWxfdmFsdWVdLmxvY2F0aW9uLmNpdHk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzcz1kYXRhW3RoaXMudHlwZS5uYW1lfHx0aGlzLmluaXRpYWwubmFtZV0uYnVzaW5lc3Nlc1t0aGlzLmluaXRpYWxfdmFsdWVdLmxvY2F0aW9uLmRpc3BsYXlfYWRkcmVzc1swXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZT1kYXRhW3RoaXMudHlwZS5uYW1lfHx0aGlzLmluaXRpYWwubmFtZV0uYnVzaW5lc3Nlc1t0aGlzLmluaXRpYWxfdmFsdWVdLmxvY2F0aW9uLmRpc3BsYXlfYWRkcmVzc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0X2xlbmd0aD0gZGF0YVt0aGlzLnR5cGUubmFtZXx8dGhpcy5pbml0aWFsLm5hbWVdLmJ1c2luZXNzZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgKVxuXG4gICAgfVxuXG4gICAgbmV3RGF0YSgpe1xuXG4gICAgICAgIHRoaXMuZ2V0dGluZ1NlcnZpY2UuZ2V0RGF0YSgpXG5cbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YT0+e1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW1lbml0eV9pbWFnZT0gZGF0YVt0aGlzLnR5cGUubmFtZXx8dGhpcy5pbml0aWFsLm5hbWVdLmJ1c2luZXNzZXNbdGhpcy5pbml0aWFsX3ZhbHVlXS5pbWFnZV91cmw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2l0eT1kYXRhW3RoaXMudHlwZS5uYW1lfHx0aGlzLmluaXRpYWwubmFtZV0uYnVzaW5lc3Nlc1t0aGlzLmluaXRpYWxfdmFsdWVdLmxvY2F0aW9uLmNpdHk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzcz1kYXRhW3RoaXMudHlwZS5uYW1lfHx0aGlzLmluaXRpYWwubmFtZV0uYnVzaW5lc3Nlc1t0aGlzLmluaXRpYWxfdmFsdWVdLmxvY2F0aW9uLmRpc3BsYXlfYWRkcmVzc1swXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZT1kYXRhW3RoaXMudHlwZS5uYW1lfHx0aGlzLmluaXRpYWwubmFtZV0uYnVzaW5lc3Nlc1t0aGlzLmluaXRpYWxfdmFsdWVdLmxvY2F0aW9uLmRpc3BsYXlfYWRkcmVzc1sxXTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIClcbiAgICB9XG4gICAgZGVjcmVtZW50Q291bnQoKXtcbiAgICAgICAgaWYodGhpcy5pbml0aWFsX3ZhbHVlPjApe1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsX3ZhbHVlLS07XG4gICAgICAgICAgICB0aGlzLm5ld0RhdGEoKTtcbiAgICAgICAgfVxuXG5cblxuICAgIH1cbiAgICBpbmNyZW1lbnRDb3VudCgpe1xuICAgICAgICBpZih0aGlzLmluaXRpYWxfdmFsdWU8dGhpcy5saXN0X2xlbmd0aC0xKSB7XG4gICAgICAgICAgICArK3RoaXMuaW5pdGlhbF92YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubmV3RGF0YSgpO1xuICAgICAgICB9XG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9