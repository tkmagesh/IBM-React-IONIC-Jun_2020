import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* import * as calc from './calculator';
//console.log(calc);

//var add = calc.add;
var { add } = calc; */

//import { add } from './calculator'

/* import calc from './calculator';
console.log(calc); */

import axios from 'axios';

axios
    .get('http://localhost:3000/tasks')
    .then(response => response.data)
    .then(tasks => console.table(tasks));


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
