// function Logging(constructor: Function){
//   console.log('Logging...');
//   console.log(constructor);
// }

function Logging(message: string){
  return function (constructor: Function){
    console.log('Logging...');
    console.log(constructor);
    console.log(message);
  }
}
console.dir(Logging);

function Component(template: string, selector: string){
  return function<T extends { new(...args: any[]): {name: string}}>(constructor: T){
    return class extends constructor{
      constructor(...arg: any[]){
        super(...arg);
        console.log('Component');
        const mountedElement = document.querySelector(selector);
        const instance = new constructor(32);
        if(mountedElement){
          mountedElement.innerHTML = template;
          mountedElement.querySelector('h1')!.textContent = instance.name; 
        }
      }
    };
  }
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log('PropertyLogging');
  console.log(target);
  console.log(propertyKey);
}

function MethodLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('MethodLogging');
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

function AccessorLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('AccessorLogging');
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

function ParameterLogging(target: any, propertyKey: string, parameterIndex: number) {
  console.log('ParameterLogging');
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

function enumerable(isEnumerable: boolean){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    return {
      enumerable: isEnumerable
    }
  }
}

@Logging('Logging User')
@Component('<h1>{{ name }}</h1>', '#app')
class User{
  @PropertyLogging
  name = 'Quill';
  constructor(private _age: number = 10){
    console.log('User was created!');
  }

  @enumerable(false)
  @MethodLogging
  greeting(@ParameterLogging message: string){
    console.log(message)
  }

  @AccessorLogging
  get age(){
    return this._age;
  }

  set age(value: number){
    this._age = value;
  }

}

const user1 = new User();
const user2 = new User();
const user3 = new User();