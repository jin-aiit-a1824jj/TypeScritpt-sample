abstract class Person {
  static species = 'Homo sapiens';
  static isAdult(age: number): boolean {
    return (age > 17) 
  }

  private readonly id: number = 32;

  constructor(public readonly name: string, protected age: number){
    this.name = name;
    this.age = age;
    this.id = 31;
  }

  greeting(this: Person){
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    this.explainJob();
  }

  increamentAge(this: Person){
    this.age += 1;
  }

  abstract explainJob(): void;
}

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

class Teacher extends Person {
  private constructor(name: string, age: number, private _subject: string){
    super(name, age);
  }
  // greeting(){
  //   console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teaching ${this.subject}`);
  // }

  get subject(): string{
    if(!this._subject){
      throw new Error('There is no subject.');
    }
    return this._subject;
  }

  set subject(value){
    if(!value){
      throw new Error('There is no subject.');
    }
    this._subject = value;
  }

  explainJob(){
    console.log(`I am a teacher and I Teach ${this.subject}.`);
  }

  private static instance: Teacher;

  static getInstance() {
    if(Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher("teacher", 20, 'math');
    return Teacher.instance;
  }

}

const teacher = Teacher.getInstance();
teacher.greeting();
teacher.increamentAge();
teacher.subject = "music";
console.log(teacher.subject);
const teacher2 = Teacher.getInstance();
teacher2.greeting();
teacher2.increamentAge();

Math.random()

console.log(Person.species);
console.log(Teacher.isAdult(18));