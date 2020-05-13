// type addFunc = (num1: number, num2: number) => number;
interface addFunc{
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (num1: number, num2: number) => {
  return num1 + num2;
}


interface Nameable{
  readonly name: string;
  nickName?: String;
}

const nameable: Nameable = {
  name: 'name',
  nickName: 'nickname'
}

interface Human extends Nameable {
  age: number;
  greeting(message: String): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number, initName?: string){
    if(initName){
      this.name = initName;
    }
  }

  greeting(message: string){
    console.log('Hello');
  }

  static id: number = 0;
}


const human: Human = {
  name: 'Quill',
  age: 38,
  greeting: function(message: string){
    console.log(message);
  }
};

let developer: Human;

const user: Human = new Developer('Quill', 38, 3, 'neewname');
//user.name = "NG";
const dev: Developer = new Developer('Quill', 38, 3);
dev.name = "Ok";

class Devlop implements Human {
  constructor(public name: string, public age: number, public experience: number){}
  greeting(message:string) {
    console.log(message);
  }
}