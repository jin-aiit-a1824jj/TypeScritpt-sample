type Engineer = {
  name: string;
  role: string;
}

type Blogger = {
  name: string;
  follower: number;
}

type EngineerBlogger = Engineer & Blogger;

interface IEngineer {
  name: string;
  role: string;
}

interface IBlogger {
  name: string;
  follower: number;
}

interface iEngineerBlogger extends IEngineer, IBlogger{
}

const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

//
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
  if(typeof x === 'string'){
    return x.toUpperCase(); 
  }
  return '';
}

type NomadWorker = Engineer | Blogger;
function describProfilen(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ('role' in nomadWorker){
    console.log(nomadWorker.role);
  }
  if ('follower' in nomadWorker){
    console.log(nomadWorker.follower);
  }
}

class Dog{
  kind: 'dog' = 'dog'
  speak(){
    console.log('bow-bow');
  }
}

class Bird{
  kind: 'bird' = 'bird'
  speak(){
    console.log('bow-bow');
  }
  fly(){
    console.log('flutter');
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet){
  pet.speak();
  if (pet instanceof Bird){
    pet.fly();
  }
  switch(pet.kind){
    case 'bird':
      pet.fly();
      break
    case 'dog':
      break
  }
}
havePet(new Bird());

//
//const input = <HTMLInputElement>document.getElementById('input');
const input = document.getElementById('input') as HTMLInputElement;
input.value = 'initial input value'

//
const input2 = document.getElementById('input')!;


//
interface Designer {
  name: string;
  //age: number;
  age: string;
  [index: string]: string;
}
const designer: Designer = {
  name: 'Quill',
  1: 'web',
  role: 'web',
  age: 'age'
}
console.log(designer.fafa);


//
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}

const downloadedData: DownloadedData = {
  id: 1
}
console.log(downloadedData.user?.name?.first);

//
const userData = downloadedData.user ?? 'no-user';
const userData2 = downloadedData.user || 'no-user';

//
type id = DownloadedData[ "id" | "user" ]

//
let target = 'hello'
let source: 'hello' = 'hello';
target = source;
//source = target;

let targetf = function(a:string){}
let sourceF = function(a:string, b?:string){}
targetf = sourceF;
sourceF = targetf;

class AdvancedPerson {
  name: string = 'Peter'
  age: number = 35
}
class AdvancedCar{
  name: string = 'Prius'
  age: number = 5;
}

let p = new AdvancedPerson();
let c = new AdvancedCar();
p = c;
c = p;

//
const upperHello = toUpperCase
upperHello("hello");
upperHello(32);

interface TempFunc {
  (x: string): number;
  (x: number): number;
}
const tmpHellp: TempFunc = function(x: string | number) {return 0;};
//

interface FuncA{
  (a:string, b:string): number;
  (a:number, b:number): number;
}
interface FuncB{
  (a:string): number;
}

let intersectionFunc : FuncA & FuncB
intersectionFunc = function(a: number | string, b?: string | number){
  return 0;
}

//
interface FuncC{
  (a:number): number;
}
interface FuncD{
  (a:string): string;
}

let unionFunc : FuncC | FuncD;
unionFunc = function(a: string){ return 'hi';}

//
function advancedFn(...args: number[]){}
advancedFn(0,1,2,3,4)
function advancedFn2(...args: readonly [number, string, boolean?, ...number[]]){}
advancedFn2(0,'1', false)
advancedFn2(22,'boo?')
advancedFn2(22,'boo?', true, 1,2,3,4,5)

//
const milk = 'milk' as const;
let drink = milk;
const array = [10, 20] as const;
const peter ={
  name: 'Peter',
  age: 38
} as const;

//
type PeterType = typeof peter;