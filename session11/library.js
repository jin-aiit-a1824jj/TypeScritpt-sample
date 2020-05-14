import axios from 'axios';
axios.get('https://');
//import _ from 'lodash';
_.shuffle([1, 2, 3, 4]);
var myApp;
(function (myApp) {
    const hello = 'hello in namespace';
    myApp.name = 'Quill';
})(myApp || (myApp = {}));
const hello = myApp.name;
let nameable;
