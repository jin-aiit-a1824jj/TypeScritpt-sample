let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: String = 'hello';
let double: String = "hello";
let back: String = `hello`;

let h = true;
let c = 10;
let f = 3.14;
let n = -0.12;
let s = 'hello';
let d = "hello";
let b = `hello`;

let aa;
aa = true;
aa = 10;
aa = 'hello';
//
const person: {
  name: string;
  age: number
} = {
  name: 'Jack',
  age: 21
}

const p: object = {
  name: 'Jack',
  age: 21
}

const p2 = {
  name: {
    first: 'Jack',
    lase: 'Smith'
  },
  age: 21
}
//
const fruits: string[] = ['Apple', 'Banana', 'Grape']
const fruit = fruits[0];

const fruits1: any = ['Apple', 'Banana', 'Grape']
const fruits2 = ['Apple', 'Banana', 'Grape', 1]

//
const book: [string, number, boolean] = ['business', 1500, false];
book[1] = 800;
book.push(100);
console.log(book[2]);

//
enum CoffeeSize {
  SHORT,
  TALL = 100,
  GRANDE,
  VENTI
}

const coffee = {
  hot: true,
  size: CoffeeSize.SHORT
}
coffee.size = CoffeeSize.TALL;

//
let anything: any = true;
anything = 'hello';
anything = ['hello',33, true];
anything = {};
anything.fasdfsf = 'fasdfsf';
let banana = 'banana';
banana = anything;

//
let unionType: number | string = 10;
unionType = 'hello';
unionType.toUpperCase();
let unionTypes: (number | string)[] = [21, 'hello'];

//
const apple: 'apple' = 'apple';
const appe = 'apple';
let appl = 'apple';
type ClothSize = 'small' | 'medium' | 'large';
//let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth:{
  color: string;
  //size: 'small' | 'medium' | 'large'
  size: ClothSize
} = {
  color: 'white',
  //size: clothSize
  size: 'medium'
}
cloth.size = 'medium';

//
function add(num1: number, num2: number): number{
  return num1 + num2
}
add(3, 2);

//
function sayHello(): void {
  console.log('Hello!');
}
console.log(sayHello());
function sayHello2(): undefined {
  console.log('Hello!');
  return;
}

//
let tep: undefined;
let tmpNull: null = undefined;

//
const anotherAdd:(n1: number, n2: number) => number = add;
const anotherAdd2:(n1: number, n2: number) => number = function(num1: number, num2: number):number{
  return num1 + num2;
};
const anotherAdd3 = function(num1: number, num2: number):number{
  return num1 + num2;
};
const doubleNumber: (num: number) => number = (number: number): number => number * 2;
const doubleNumber2 = (number: number) => number * 2;

//
function doubleAndHandle(num: number, cb: (num: number)=>number): void{
  const double = cb(num * 2);
  console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {return doubleNum;});

//
let unknowInput: unknown;
let text: string;
unknowInput = 'hello';
unknowInput = 21;
unknowInput = true;
if (typeof unknowInput === 'string'){
  text = unknowInput;
}
  
//
function error(message: string): never{
  throw new Error(message);
}
console.log(error('This is Error!'));