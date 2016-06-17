/**
 * Created by navyaeetaram on 6/16/16.
 */
System.register(['@angular/core', '@angular/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var GetService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            GetService = (function () {
                function GetService(_http) {
                    this._http = _http;
                    this.myUrl = 'http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/CA/San Francisco';
                }
                GetService.prototype.getData = function () {
                    return this._http.get(this.myUrl)
                        .map(this.extractData);
                };
                GetService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                GetService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GetService);
                return GetService;
            }());
            exports_1("GetService", GetService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2dldFNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNIO2dCQUNJLG9CQUFvQixLQUFVO29CQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7b0JBQ3RCLFVBQUssR0FBQyxzRkFBc0YsQ0FBQztnQkFEckUsQ0FBQztnQkFFakMsNEJBQU8sR0FBUDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFHM0IsQ0FBQztnQkFDRyxnQ0FBVyxHQUFuQixVQUFvQixHQUFhO29CQUM3QixJQUFJLElBQUksR0FBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFFLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFkTDtvQkFBQyxpQkFBVSxFQUFFOzs4QkFBQTtnQkFlYixpQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQsbUNBYUMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9nZXRTZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbmF2eWFlZXRhcmFtIG9uIDYvMTYvMTYuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL1J4J1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBHZXRTZXJ2aWNle1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6SHR0cCl7fVxuICAgIHByaXZhdGUgbXlVcmw9J2h0dHA6Ly9wcm9kLWpveWZ1bGhvbWUtYXBpLnN5bmFwc3lzLnVzL2xvY2F0aW9uL2FtZW5pdGllc0luTG9jYXRpb24vQ0EvU2FuIEZyYW5jaXNjbyc7XG4gICAgZ2V0RGF0YSgpOk9ic2VydmFibGU8YW55PntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMubXlVcmwpXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpO1xuXG5cbiAgICAgICAgfVxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSl7XG4gICAgICAgIGxldCBib2R5PSByZXMuanNvbigpO1xuICAgICAgICByZXR1cm4gYm9keS5kYXRhfHx7fTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
