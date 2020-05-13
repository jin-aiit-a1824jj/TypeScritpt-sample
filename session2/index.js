var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var h = true;
var c = 10;
var f = 3.14;
var n = -0.12;
var s = 'hello';
var d = "hello";
var b = "hello";
var aa;
aa = true;
aa = 10;
aa = 'hello';
//
var person = {
    name: 'Jack',
    age: 21
};
var p = {
    name: 'Jack',
    age: 21
};
var p2 = {
    name: {
        first: 'Jack',
        lase: 'Smith'
    },
    age: 21
};
//
var fruits = ['Apple', 'Banana', 'Grape'];
var fruit = fruits[0];
var fruits1 = ['Apple', 'Banana', 'Grape'];
var fruits2 = ['Apple', 'Banana', 'Grape', 1];
//
var book = ['business', 1500, false];
book[1] = 800;
book.push(100);
console.log(book[2]);
//
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 100] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 101] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 102] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
coffee.size = CoffeeSize.TALL;
//
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.fasdfsf = 'fasdfsf';
var banana = 'banana';
banana = anything;
//
var unionType = 10;
unionType = 'hello';
unionType.toUpperCase();
var unionTypes = [21, 'hello'];
//
var apple = 'apple';
var appe = 'apple';
var appl = 'apple';
//let clothSize: 'small' | 'medium' | 'large' = 'large';
var cloth = {
    color: 'white',
    //size: clothSize
    size: 'medium'
};
cloth.size = 'medium';
//
function add(num1, num2) {
    return num1 + num2;
}
add(3, 2);
//
function sayHello() {
    console.log('Hello!');
}
console.log(sayHello());
function sayHello2() {
    console.log('Hello!');
    return;
}
//
var tep;
var tmpNull = undefined;
//
var anotherAdd = add;
var anotherAdd2 = function (num1, num2) {
    return num1 + num2;
};
var anotherAdd3 = function (num1, num2) {
    return num1 + num2;
};
var doubleNumber = function (number) { return number * 2; };
var doubleNumber2 = function (number) { return number * 2; };
//
function doubleAndHandle(num, cb) {
    var double = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, function (doubleNum) { return doubleNum; });
//
var unknowInput;
var text;
unknowInput = 'hello';
unknowInput = 21;
unknowInput = true;
if (typeof unknowInput === 'string') {
    text = unknowInput;
}
//
function error(message) {
    throw new Error(message);
}
console.log(error('This is Error!'));
