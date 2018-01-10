"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var posts_service_1 = require("./posts.service");
var PostsComponent = (function () {
    function PostsComponent(service) {
        var _this = this;
        this.service = service;
        //if(this.arrusers=null){
        var req = this.service.GetResponse('posts');
        req.subscribe(function (rsp) {
            _this.arrposts = rsp.json();
            console.log(_this.arrposts);
        });
    }
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        selector: 'posts',
        template: "\n  \nwellcome to posts\n\n<table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Usrt id</th>        \n        <th>Id</th>\n          <th>Title</th>\n             <th>Body</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let post of arrposts\">\n        <td>{{post.userId}}</td> \n        <td>{{post.id}}</td>\n        <td>{{post.title}}</td>\n        <td>{{post.body}}</td>\n      </tr>\n          </tbody>\n      </table>\n\n  ",
        providers: [posts_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map