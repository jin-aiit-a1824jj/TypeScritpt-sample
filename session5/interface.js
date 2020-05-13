"use strict";
var addFunc;
addFunc = function (num1, num2) {
    return num1 + num2;
};
var nameable = {
    name: 'name',
    nickName: 'nickname'
};
var Developer = /** @class */ (function () {
    function Developer(name, age, experience, initName) {
        this.name = name;
        this.age = age;
        this.experience = experience;
        if (initName) {
            this.name = initName;
        }
    }
    Developer.prototype.greeting = function (message) {
        console.log('Hello');
    };
    Developer.id = 0;
    return Developer;
}());
var human = {
    name: 'Quill',
    age: 38,
    greeting: function (message) {
        console.log(message);
    }
};
var developer;
var user = new Developer('Quill', 38, 3, 'neewname');
//user.name = "NG";
var dev = new Developer('Quill', 38, 3);
dev.name = "Ok";
var Devlop = /** @class */ (function () {
    function Devlop(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    Devlop.prototype.greeting = function (message) {
        console.log(message);
    };
    return Devlop;
}());
