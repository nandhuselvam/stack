// // console.log("Hello World!!!");
// // // const { clear } = require('console');
// // // console.log(global);

// // // const os = require('os')

// // // console.log(os.type());
// // // console.log(os.version());
// // // console.log(os.homedir());

// // // console.log(__dirname);
// // // console.log(__filename);
// // // console.log(path.parse(__filename));

// // // console.log(path.dirname(__filename))

// // // console.log(__dirname);

// // const path = require('path')
// // console.log(__dirname);

// // console.log(__filename);

// // console.log(path.parse(__filename));
// //math

// const {add, sub, mul, div} = require('./math')

// console.log(add(3,3));
// console.log(sub(10,8));
// console.log(`${add(3,3)}, ${sub(3,3)}, ${mul(3,3)}, ${div(3,3)}`);



import { readFile } from 'node:fs';

readFile('./notes.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});