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
                    this.restaurantCount = '';
                    this.groceriesCount = '';
                    this.bankCount = '';
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
                        _this.restaurantCount = data.restaurant.businesses.length;
                        _this.groceriesCount = data.grocers.businesses.length;
                        _this.bankCount = data.banks.businesses.length;
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
                        template: "\n        <div class=\"left-block\">\n            <div class=\"left-block_top-rectangle\">\n                <div class=\"left-block_top-rectangle_title\">What's the highest rated {{type.title||initial.title}} in this area?</div>\n                \n                <div class=\"left-block_top-rectangle_location\">\n                    <span class=\"left-block_top-rectangle_map\">\n                        <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                    </span>{{city}}</div>\n                <div class=\"left-block_top-rectangle_img\">\n                    <div class=\"left-block_top-rectangle_img_left-arc\" (click)=\"decrementCount()\">\n                        <div class=\"left-block_top-rectangle_img_left-arc_arrow\">\n                            <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        </div>\n                    </div>\n                    <div class=\"left-block_top-rectangle_img_circle\"><img src=\"{{amenity_image}}\" width=\"100%\" height=\"100%\"></div>\n                    \n                    <div class=\"left-block_top-rectangle_img_right-arc\" (click)=\"incrementCount()\">\n                        <div class=\"left-block_top-rectangle_img_right-arc_arrow\">\n                            <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"left-block_top-rectangle_establishment\">{{address}}</div>\n                <div class=\"left-block_top-rectangle_est-loc\">{{state}}</div>\n                <div class=\"left-block_top-rectangle_stl-button\">\n                    <div class=\"left-block_top-rectangle_stl-button_scircle\">\n                        <div class=\"left-block_top-rectangle_stl-button_scircle_home\">\n                            <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n                         </div>\n                    </div>See The Lists\n                     <div class=\"left-block_top-rectangle_stl-button_angle\">\n                        <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n                    </div>\n                </div>\n                    \n            </div>\n            <div class=\"left-block_caret\"></div>\n            <bottom-list [restaurantCount]=\"restaurantCount\" [groceryCount]=\"groceriesCount\" [bankCount]=\"bankCount\"></bottom-list>\n        </div>\n        \n    ",
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

//# sourceMappingURL=data:application/json;base64,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QkFDdkMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO3dCQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ25CLENBQUM7Z0JBRUwsQ0FBQztnQkFsSEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsU0FBUzt3QkFDbEIsUUFBUSxFQUFDLG82RUF5Q1I7d0JBQ0QsU0FBUyxFQUFDLENBQUMscUJBQXFCLENBQUM7d0JBQ2pDLE1BQU0sRUFBQyxDQUFDLE1BQU0sQ0FBQzt3QkFDZixVQUFVLEVBQUMsQ0FBQyxpQ0FBVSxDQUFDO3FCQUMxQixDQUFDOzs4QkFBQTtnQkFvRUYsaUJBQUM7WUFBRCxDQWxFQSxBQWtFQyxJQUFBO1lBbEVELG1DQWtFQyxDQUFBIiwiZmlsZSI6IlRvcFJhbmtpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG5hdnlhZWV0YXJhbSBvbiA2LzE2LzE2LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dldFNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZ2V0U2VydmljZS5zZXJ2aWNlJztcbmltcG9ydCB7Qm90dG9tTGlzdH0gZnJvbSBcIi4vYm90dG9tTGlzdC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3JhbmtpbmcnLFxuICAgIHRlbXBsYXRlOmBcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYmxvY2tcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJsb2NrX3RvcC1yZWN0YW5nbGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ibG9ja190b3AtcmVjdGFuZ2xlX3RpdGxlXCI+V2hhdCdzIHRoZSBoaWdoZXN0IHJhdGVkIHt7dHlwZS50aXRsZXx8aW5pdGlhbC50aXRsZX19IGluIHRoaXMgYXJlYT88L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ibG9ja190b3AtcmVjdGFuZ2xlX2xvY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGVmdC1ibG9ja190b3AtcmVjdGFuZ2xlX21hcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1tYXAtbWFya2VyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e3tjaXR5fX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ibG9ja190b3AtcmVjdGFuZ2xlX2ltZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ibG9ja190b3AtcmVjdGFuZ2xlX2ltZ19sZWZ0LWFyY1wiIChjbGljayk9XCJkZWNyZW1lbnRDb3VudCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ibG9ja190b3AtcmVjdGFuZ2xlX2ltZ19sZWZ0LWFyY19hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYmxvY2tfdG9wLXJlY3RhbmdsZV9pbWdfY2lyY2xlXCI+PGltZyBzcmM9XCJ7e2FtZW5pdHlfaW1hZ2V9fVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJsb2NrX3RvcC1yZWN0YW5nbGVfaW1nX3JpZ2h0LWFyY1wiIChjbGljayk9XCJpbmNyZW1lbnRDb3VudCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ibG9ja190b3AtcmVjdGFuZ2xlX2ltZ19yaWdodC1hcmNfYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJsb2NrX3RvcC1yZWN0YW5nbGVfZXN0YWJsaXNobWVudFwiPnt7YWRkcmVzc319PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYmxvY2tfdG9wLXJlY3RhbmdsZV9lc3QtbG9jXCI+e3tzdGF0ZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYmxvY2tfdG9wLXJlY3RhbmdsZV9zdGwtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJsb2NrX3RvcC1yZWN0YW5nbGVfc3RsLWJ1dHRvbl9zY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ibG9ja190b3AtcmVjdGFuZ2xlX3N0bC1idXR0b25fc2NpcmNsZV9ob21lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1ob21lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5TZWUgVGhlIExpc3RzXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ibG9ja190b3AtcmVjdGFuZ2xlX3N0bC1idXR0b25fYW5nbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYmxvY2tfY2FyZXRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxib3R0b20tbGlzdCBbcmVzdGF1cmFudENvdW50XT1cInJlc3RhdXJhbnRDb3VudFwiIFtncm9jZXJ5Q291bnRdPVwiZ3JvY2VyaWVzQ291bnRcIiBbYmFua0NvdW50XT1cImJhbmtDb3VudFwiPjwvYm90dG9tLWxpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICBgLFxuICAgIHN0eWxlVXJsczpbJ3NyYy9jc3MvcmFua2luZy5jc3MnXSxcbiAgICBpbnB1dHM6Wyd0eXBlJ10sXG4gICAgZGlyZWN0aXZlczpbQm90dG9tTGlzdF0sXG59KVxuXG5leHBvcnQgY2xhc3MgVG9wUmFua2luZ3tcbiAgICBpbml0aWFsPXtuYW1lOidyZXN0YXVyYW50JywgdGl0bGU6J1Jlc3RhdXJhbnQnfVxuICAgIHR5cGU9e25hbWU6JycsIHRpdGxlOicnLCBpbWFnZVVybDonJ307XG4gICAgYW1lbml0eV9pbWFnZTogc3RyaW5nO1xuICAgIGNpdHk6IHN0cmluZztcbiAgICBhZGRyZXNzOiBzdHJpbmc7XG4gICAgc3RhdGU6IHN0cmluZztcbiAgICBpbml0aWFsX3ZhbHVlOiBudW1iZXIgPTA7XG4gICAgbGlzdF9sZW5ndGg6IG51bWJlcjtcbiAgICByZXN0YXVyYW50Q291bnQ9Jyc7XG4gICAgZ3JvY2VyaWVzQ291bnQ9Jyc7XG4gICAgYmFua0NvdW50PScnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBnZXR0aW5nU2VydmljZTogR2V0U2VydmljZSl7fVxuXG4gICAgbmdPbkluaXQoKXtcblxuICAgICAgICB0aGlzLmdldHRpbmdTZXJ2aWNlLmdldERhdGEoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhPT57XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbWVuaXR5X2ltYWdlPSBkYXRhW3RoaXMudHlwZS5uYW1lfHx0aGlzLmluaXRpYWwubmFtZV0uYnVzaW5lc3Nlc1t0aGlzLmluaXRpYWxfdmFsdWVdLmltYWdlX3VybDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaXR5PWRhdGFbdGhpcy50eXBlLm5hbWV8fHRoaXMuaW5pdGlhbC5uYW1lXS5idXNpbmVzc2VzW3RoaXMuaW5pdGlhbF92YWx1ZV0ubG9jYXRpb24uY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzPWRhdGFbdGhpcy50eXBlLm5hbWV8fHRoaXMuaW5pdGlhbC5uYW1lXS5idXNpbmVzc2VzW3RoaXMuaW5pdGlhbF92YWx1ZV0ubG9jYXRpb24uZGlzcGxheV9hZGRyZXNzWzBdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlPWRhdGFbdGhpcy50eXBlLm5hbWV8fHRoaXMuaW5pdGlhbC5uYW1lXS5idXNpbmVzc2VzW3RoaXMuaW5pdGlhbF92YWx1ZV0ubG9jYXRpb24uZGlzcGxheV9hZGRyZXNzWzFdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RfbGVuZ3RoPSBkYXRhW3RoaXMudHlwZS5uYW1lfHx0aGlzLmluaXRpYWwubmFtZV0uYnVzaW5lc3Nlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdGF1cmFudENvdW50PWRhdGEucmVzdGF1cmFudC5idXNpbmVzc2VzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJpZXNDb3VudD1kYXRhLmdyb2NlcnMuYnVzaW5lc3Nlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFua0NvdW50PWRhdGEuYmFua3MuYnVzaW5lc3Nlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcj0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApXG5cbiAgICB9XG5cbiAgICBuZXdEYXRhKCl7XG5cbiAgICAgICAgdGhpcy5nZXR0aW5nU2VydmljZS5nZXREYXRhKClcblxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhPT57XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbWVuaXR5X2ltYWdlPSBkYXRhW3RoaXMudHlwZS5uYW1lfHx0aGlzLmluaXRpYWwubmFtZV0uYnVzaW5lc3Nlc1t0aGlzLmluaXRpYWxfdmFsdWVdLmltYWdlX3VybDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaXR5PWRhdGFbdGhpcy50eXBlLm5hbWV8fHRoaXMuaW5pdGlhbC5uYW1lXS5idXNpbmVzc2VzW3RoaXMuaW5pdGlhbF92YWx1ZV0ubG9jYXRpb24uY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzPWRhdGFbdGhpcy50eXBlLm5hbWV8fHRoaXMuaW5pdGlhbC5uYW1lXS5idXNpbmVzc2VzW3RoaXMuaW5pdGlhbF92YWx1ZV0ubG9jYXRpb24uZGlzcGxheV9hZGRyZXNzWzBdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlPWRhdGFbdGhpcy50eXBlLm5hbWV8fHRoaXMuaW5pdGlhbC5uYW1lXS5idXNpbmVzc2VzW3RoaXMuaW5pdGlhbF92YWx1ZV0ubG9jYXRpb24uZGlzcGxheV9hZGRyZXNzWzFdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgICBkZWNyZW1lbnRDb3VudCgpe1xuICAgICAgICBpZih0aGlzLmluaXRpYWxfdmFsdWU+MCl7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxfdmFsdWUtLTtcbiAgICAgICAgICAgIHRoaXMubmV3RGF0YSgpO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuICAgIGluY3JlbWVudENvdW50KCl7XG4gICAgICAgIGlmKHRoaXMuaW5pdGlhbF92YWx1ZTx0aGlzLmxpc3RfbGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICsrdGhpcy5pbml0aWFsX3ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5uZXdEYXRhKCk7XG4gICAgICAgIH1cblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
