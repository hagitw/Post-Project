"use strict";
var user = (function () {
    function user(Userid, name, email, phone, street, suite, city, zipcode) {
        this.Userid = Userid;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
    }
    user.prototype.getId = function () {
        return this.Userid;
    };
    user.prototype.getname = function () {
        return this.name;
    };
    user.prototype.getemail = function () {
        return this.email;
    };
    user.prototype.getphone = function () {
        return this.phone;
    };
    user.prototype.getstreet = function () {
        return this.street;
    };
    user.prototype.getsuite = function () {
        return this.suite;
    };
    user.prototype.getcity = function () {
        return this.city;
    };
    user.prototype.getzipcode = function () { return this.zipcode; };
    return user;
}());
exports.user = user;
//# sourceMappingURL=user.js.map