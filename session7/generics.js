"use strict";
function copy(value) {
    return value;
}
console.log(copy('hello'));
console.log(copy({ name: 'Quill' }));
//
function copy2(value) {
    return value;
}
console.log(copy2({ name: 'Quill' }));
function copy3(value, key) {
    value[key];
    return value;
}
console.log(copy3({ name: 'Quill', age: 38 }, 'name'));
//
var LightDatabase = /** @class */ (function () {
    function LightDatabase() {
        this.data = [];
    }
    LightDatabase.prototype.add = function (item) {
        this.data.push(item);
    };
    LightDatabase.prototype.remove = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    LightDatabase.prototype.get = function () {
        return this.data;
    };
    return LightDatabase;
}());
var stringLightDatabase = new LightDatabase();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());
var tmpDatabase = {
    id: 3,
    data: [32]
};
var fetchData = new Promise(function (resolve) {
    setTimeout(function () {
        resolve('hello');
    }, 3000);
});
fetchData.then(function (data) {
    data.toUpperCase();
});
var vegetables = ['Tomato', 'Broccoli', 'Asparagus'];
var vegetables2 = ['Tomato', 'Broccoli', 'Asparagus'];
var tmp2;
var tmp4;
var tmp5;
