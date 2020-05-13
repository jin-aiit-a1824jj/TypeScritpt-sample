var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.id = 32;
        this.name = name;
        this.age = age;
        this.id = 31;
    }
    Person.isAdult = function (age) {
        return (age > 17);
    };
    Person.prototype.greeting = function () {
        console.log("Hello! My name is " + this.name + ". I am " + this.age + " years old.");
        this.explainJob();
    };
    Person.prototype.increamentAge = function () {
        this.age += 1;
    };
    Person.species = 'Homo sapiens';
    return Person;
}());
//const quill = new Person('Quill', 38);
//console.log(quill);
//quill.age = 42;
//quill.increamentAge();
//quill.greeting();
/*
const anotherQuill = {
  name: 'anotherQuill',
  greeting: quill.greeting, //greeting(){},
  anotherGreeting: quill.greeting
  // anotherGreeting: function(){
  //   console.log(`Hello! My name is ${this.name}`);
  // }
}
anotherQuill.anotherGreeting();
*/
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "subject", {
        // greeting(){
        //   console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teaching ${this.subject}`);
        // }
        get: function () {
            if (!this._subject) {
                throw new Error('There is no subject.');
            }
            return this._subject;
        },
        set: function (value) {
            if (!value) {
                throw new Error('There is no subject.');
            }
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.prototype.explainJob = function () {
        console.log("I am a teacher and I Teach " + this.subject + ".");
    };
    Teacher.getInstance = function () {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher("teacher", 20, 'math');
        return Teacher.instance;
    };
    return Teacher;
}(Person));
var teacher = Teacher.getInstance();
teacher.greeting();
teacher.increamentAge();
teacher.subject = "music";
console.log(teacher.subject);
var teacher2 = Teacher.getInstance();
teacher2.greeting();
teacher2.increamentAge();
Math.random();
console.log(Person.species);
console.log(Teacher.isAdult(18));
