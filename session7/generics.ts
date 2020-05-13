function copy<T>(value: any): T{ 
  return value;
}
console.log(copy<string>('hello'));
console.log(copy({name:'Quill'}));

//
function copy2<T extends{name: string}>(value: any): T{ 
  return value;
}
console.log(copy2({name:'Quill'}));

//
type k = keyof { name: string; age: number}
function copy3<T extends{name: string}, U extends keyof T>(value: T, key: U): T{ 
  value[key];
  return value;
}
console.log(copy3({name:'Quill', age: 38}, 'name'));

//
class LightDatabase<T extends String | number | boolean>{

  private data: T[] = [];
  add(item: T){
    this.data.push(item);
  }
  remove(item: T){
    this.data.splice(this.data.indexOf(item), 1);
  }
  get(){
    return this.data;
  }

}
const stringLightDatabase = new LightDatabase<String>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get())

//
interface TmpDatabase<T>{
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32]
};

//
interface Todo{
  title: string;
  text: string;
}
type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData = new Promise( (resolve: any) => {
  setTimeout(()=>{
    resolve('hello');
  }, 3000);  
})
fetchData.then( (data: any) => {
  data.toUpperCase();
})

const vegetables = ['Tomato', 'Broccoli', 'Asparagus'];
const vegetables2: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'];

//
interface ResponseData<T extends {message: string} = any> {
  data: T;
  status: number;
}
let tmp2: ResponseData;

//
type MappedTypes = {
  [P in 'tomato' | 'pumpkin'] : P
}
interface Vegetab {
  readonly tomato: string;
  pumpkin: string;
}
type MappedTypesV = {
  -readonly [P in keyof Vegetab]? : string
}

//
type ConditionalTypes = 'tomato' extends string ? number : boolean
type ConditionalTypes2 = string extends 'tomato' ? number : boolean
type ConditionalTypesInfer = {tomato: 'tomato'} extends {tomato: infer R} ? R : boolean;
type DistributiveConditionalTypes<T> = T extends 'tomato' ? number : boolean;
let tmp4: DistributiveConditionalTypes<'tomato' | 'pumpkin'>
let tmp5: NonNullable< null | undefined >