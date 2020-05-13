"use strict";
var _a, _b, _c;
var quill = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return '';
}
function describProfilen(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
var Dog = /** @class */ (function () {
    function Dog() {
        this.kind = 'dog';
    }
    Dog.prototype.speak = function () {
        console.log('bow-bow');
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.kind = 'bird';
    }
    Bird.prototype.speak = function () {
        console.log('bow-bow');
    };
    Bird.prototype.fly = function () {
        console.log('flutter');
    };
    return Bird;
}());
function havePet(pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
    switch (pet.kind) {
        case 'bird':
            pet.fly();
            break;
        case 'dog':
            break;
    }
}
havePet(new Bird());
//
//const input = <HTMLInputElement>document.getElementById('input');
var input = document.getElementById('input');
input.value = 'initial input value';
//
var input2 = document.getElementById('input');
var designer = {
    name: 'Quill',
    1: 'web',
    role: 'web',
    age: 'age'
};
console.log(designer.fafa);
var downloadedData = {
    id: 1
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
//
var userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : 'no-user';
var userData2 = downloadedData.user || 'no-user';
//
var target = 'hello';
var source = 'hello';
target = source;
//source = target;
var targetf = function (a) { };
var sourceF = function (a, b) { };
targetf = sourceF;
sourceF = targetf;
var AdvancedPerson = /** @class */ (function () {
    function AdvancedPerson() {
        this.name = 'Peter';
        this.age = 35;
    }
    return AdvancedPerson;
}());
var AdvancedCar = /** @class */ (function () {
    function AdvancedCar() {
        this.name = 'Prius';
        this.age = 5;
    }
    return AdvancedCar;
}());
var p = new AdvancedPerson();
var c = new AdvancedCar();
p = c;
c = p;
//
var upperHello = toUpperCase;
upperHello("hello");
upperHello(32);
var tmpHellp = function (x) { return 0; };
var intersectionFunc;
intersectionFunc = function (a, b) {
    return 0;
};
var unionFunc;
unionFunc = function (a) { return 'hi'; };
//
function advancedFn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
advancedFn(0, 1, 2, 3, 4);
function advancedFn2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
advancedFn2(0, '1', false);
advancedFn2(22, 'boo?');
advancedFn2(22, 'boo?', true, 1, 2, 3, 4, 5);
//
var milk = 'milk';
var drink = milk;
var array = [10, 20];
var peter = {
    name: 'Peter',
    age: 38
};
//
