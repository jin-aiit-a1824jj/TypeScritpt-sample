import axios from 'axios';
axios.get('https://')

//import _ from 'lodash';
_.shuffle([1,2,3,4]);

namespace myApp {
  const hello = 'hello in namespace';
  export const name = 'Quill';
  export interface Nameable {
    name: string;
  }
}
const hello = myApp.name
let nameable: myApp.Nameable;

let name: string;
//function name() {}
//enum name {}
//class name {}
interface name {}
//namespace name {}


// namespace name {
//   export const first: string = 'name';
// }