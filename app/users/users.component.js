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
var users_service_1 = require("./users.service");
var user_1 = require("./user");
var UsersComponent = (function () {
    function UsersComponent(service) {
        var _this = this;
        this.service = service;
        this.arrusers = new Array();
        this.artext = new Array();
        this.ShowUsers = true;
        this.Showadduser = false;
        this.Showedituser = false;
        this.errorsMassage = "";
        var req = this.service.GetResponse();
        req.subscribe(function (rsp) {
            _this.arrusers = rsp.json();
            _this.arrUserJosn = rsp.json();
            _this.arrusers = _this.GetArrayOrder(_this.arrUserJosn);
            console.log(_this.arrusers);
        });
    }
    UsersComponent.prototype.GoAddUser = function () {
        this.Showadduser = !this.Showadduser;
        this.ShowUsers = !this.ShowUsers;
    };
    UsersComponent.prototype.GoEditUser = function () {
        this.ShowUsers = !this.ShowUsers;
        this.Showedituser = !this.Showedituser;
    };
    UsersComponent.prototype.formaddnewuser = function (newuserform) {
        var _this = this;
        if (newuserform.valid) {
            console.log(newuserform);
            var body_1 = { name: this.name, email: this.email, phone: this.phone, street: this.street, suite: this.suite, city: this.city, zipcode: this.zipcode };
            var req = this.service.adduser(body_1);
            req.subscribe(function (rsp) {
                var NewId = _this.arrusers.length + 1;
                _this.arrusers.push(new user_1.user(NewId, body_1.name, body_1.email, body_1.phone, body_1.street, body_1.suite, body_1.city, body_1.zipcode)),
                    console.log("success : " + rsp);
                console.log(newuserform);
            }, function (err) { console.log("error : " + err); });
        }
        this.errorsMassage = "please field all required fild";
    };
    UsersComponent.prototype.deletuser = function (user) {
        this.userdelet = user;
    };
    UsersComponent.prototype.delete = function () {
        var index = this.arrusers.indexOf(this.userdelet);
        this.arrusers.splice(index, 1);
        var req = this.service.DeleteUser(this.userdelet.Userid);
        req.subscribe(function (rsp) { console.log("Delete successed"); }, function (err) {
            window.alert("Delete is fild :  " + err);
        });
    };
    //---------------------------------------------------------------------------------------//
    UsersComponent.prototype.edit = function (user) {
        this.UserToEdit = user;
        this.Id = user.Userid;
        this.name = user.name;
        this.email = user.email;
        this.phone = user.phone;
        this.street = user.street;
        this.suite = user.suite;
        this.city = user.city;
        this.zipcode = user.zipcode;
        this.GoEditUser();
    };
    UsersComponent.prototype.SetEdit = function () {
        var EditUser = new user_1.user(this.Id, this.name, this.email, this.phone, this.street, this.suite, this.city, this.zipcode);
        return EditUser;
    };
    UsersComponent.prototype.EsubmitHandler = function (trvFormEdit) {
        var _this = this;
        if (trvFormEdit.valid) {
            var index_1 = this.arrusers.indexOf(this.UserToEdit);
            var body = { name: this.name, email: this.email, phone: this.phone, street: this.street, suite: this.suite, city: this.city, zipcode: this.zipcode };
            var req = this.service.Edituser(body, this.Id);
            req.subscribe(function (rsp) {
                _this.arrusers[index_1] = _this.SetEdit();
                console.log("Edit successedd : " + rsp);
                console.log(_this.SetEdit());
            }, function (err) { console.log("error Edit fild : " + err); });
        }
        this.GoEditUser();
    };
    //---------------------------------------------------------------------------------------//
    UsersComponent.prototype.GetArrayOrder = function (arr) {
        var arUser = new Array();
        for (var index = 0; index < arr.length; index++) {
            var Nuser = new user_1.user(arr[index].id, arr[index].name, arr[index].email, arr[index].phone, arr[index].address.street, arr[index].address.suite, arr[index].address.city, arr[index].address.zipcode);
            arUser.push(Nuser);
        }
        console.log(arUser);
        return arUser;
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'users',
        templateUrl: "./user.component.html",
        providers: [users_service_1.UsersService]
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map