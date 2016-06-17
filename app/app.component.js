System.register(['@angular/core', './services/getService.service', "./NearByBlocks.component", "./Title.component", "./TopRanking.component"], function(exports_1, context_1) {
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
    var core_1, getService_service_1, NearByBlocks_component_1, Title_component_1, TopRanking_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (getService_service_1_1) {
                getService_service_1 = getService_service_1_1;
            },
            function (NearByBlocks_component_1_1) {
                NearByBlocks_component_1 = NearByBlocks_component_1_1;
            },
            function (Title_component_1_1) {
                Title_component_1 = Title_component_1_1;
            },
            function (TopRanking_component_1_1) {
                TopRanking_component_1 = TopRanking_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.type = { name: '', title: '', imageUrl: '' };
                }
                AppComponent.prototype.onClickTile = function (type) {
                    this.type = type;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        \n        <div class=\"amenities\">\n        <top-title></top-title>\n        <ranking [type]=\"type\"></ranking>\n        <near-by (clickBlock)=\"onClickTile($event)\">loading....</near-by>\n        \n       \n    ",
                        providers: [getService_service_1.GetService],
                        directives: [NearByBlocks_component_1.NearByComponent, Title_component_1.TitleComponent, TopRanking_component_1.TopRanking],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsQ0FBQztnQkFPeEMsQ0FBQztnQkFORyxrQ0FBVyxHQUFYLFVBQVksSUFBb0Q7b0JBQzVELElBQUksQ0FBQyxJQUFJLEdBQUUsSUFBSSxDQUFDO2dCQUVwQixDQUFDO2dCQW5CTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsbU9BUVQ7d0JBQ0QsU0FBUyxFQUFDLENBQUMsK0JBQVUsQ0FBQzt3QkFDdEIsVUFBVSxFQUFDLENBQUMsd0NBQWUsRUFBQyxnQ0FBYyxFQUFDLGlDQUFVLENBQUM7cUJBQ3pELENBQUM7O2dDQUFBO2dCQVNGLG1CQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCx1Q0FRQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dldFNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZ2V0U2VydmljZS5zZXJ2aWNlJztcbmltcG9ydCB7TmVhckJ5Q29tcG9uZW50fSBmcm9tIFwiLi9OZWFyQnlCbG9ja3MuY29tcG9uZW50XCI7XG5pbXBvcnQge1RpdGxlQ29tcG9uZW50fSBmcm9tIFwiLi9UaXRsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7VG9wUmFua2luZ30gZnJvbSBcIi4vVG9wUmFua2luZy5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW1lbml0aWVzXCI+XG4gICAgICAgIDx0b3AtdGl0bGU+PC90b3AtdGl0bGU+XG4gICAgICAgIDxyYW5raW5nIFt0eXBlXT1cInR5cGVcIj48L3Jhbmtpbmc+XG4gICAgICAgIDxuZWFyLWJ5IChjbGlja0Jsb2NrKT1cIm9uQ2xpY2tUaWxlKCRldmVudClcIj5sb2FkaW5nLi4uLjwvbmVhci1ieT5cbiAgICAgICAgXG4gICAgICAgXG4gICAgYCxcbiAgICBwcm92aWRlcnM6W0dldFNlcnZpY2VdLFxuICAgIGRpcmVjdGl2ZXM6W05lYXJCeUNvbXBvbmVudCxUaXRsZUNvbXBvbmVudCxUb3BSYW5raW5nXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICB0eXBlPXtuYW1lOicnLHRpdGxlOicnLGltYWdlVXJsOicnfTtcbiAgICBvbkNsaWNrVGlsZSh0eXBlOntuYW1lOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGltYWdlVXJsOiBzdHJpbmd9KXtcbiAgICAgICAgdGhpcy50eXBlID10eXBlO1xuXG4gICAgfVxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
