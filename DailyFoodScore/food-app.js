"use strict";
var Score = /** @class */ (function () {
    function Score() {
    }
    return Score;
}());
var Food = /** @class */ (function () {
    function Food() {
    }
    return Food;
}());
var Foods = /** @class */ (function () {
    function Foods() {
        this.elements = document.querySelectorAll('.food');
        this.elements.forEach(function (element) {
        });
    }
    return Foods;
}());
var foods = new Foods();
