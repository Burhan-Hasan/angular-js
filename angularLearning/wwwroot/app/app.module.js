"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var home_component_1 = require("./components/home/home.component");
var index_1 = require("./index");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http"); //������ ��������� ��������� http ������. (������ ��� �������� � ����� http_get.component.ts)
var app2_module_1 = require("./app2/app2.module");
var component_features_module_1 = require("./modules/component_features/component_features.module");
var directives_module_1 = require("./modules/directives/directives.module");
var services_module_1 = require("./modules/services/services.module");
var routing_module_1 = require("./modules/routing/routing.module");
//import { routes } from './app.routes';
var root_routes_module_1 = require("./root-routes.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        //������ ���� ������� ��� ������ ����������
        imports: [
            platform_browser_1.BrowserModule,
            root_routes_module_1.RootRouterModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            app2_module_1.App2Module,
            component_features_module_1.ComponentFeaturesModule,
            directives_module_1.DirectivesModule,
            services_module_1.ServicesModule,
            routing_module_1.RoutingModule
        ],
        //������ ���� ����������� � �������� � �������� �������� ������ ������
        declarations: [index_1.AppComponent, home_component_1.HomeComponent, index_1.TdfComponent, index_1.MdfComponent, index_1.HttpGetComponent, index_1.HttpPostComponent, index_1.HeadersAndParamsComponent],
        //���������� � �������� ����������� ����������
        bootstrap: [index_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map