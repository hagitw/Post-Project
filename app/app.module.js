"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var users_component_1 = require("./users/users.component");
var posts_component_1 = require("./posts/posts.component");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var pagenotfound_component_1 = require("./pagenotfound/pagenotfound.component");
var forms_1 = require("@angular/forms");
var appRoutes = [
    { path: 'Home', component: home_component_1.HomeComponent },
    { path: 'Users', component: users_component_1.UsersComponent },
    { path: 'Posts', component: posts_component_1.PostsComponent },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes), forms_1.FormsModule],
        declarations: [app_component_1.AppComponent,
            home_component_1.HomeComponent, users_component_1.UsersComponent,
            posts_component_1.PostsComponent, pagenotfound_component_1.PageNotFoundComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map