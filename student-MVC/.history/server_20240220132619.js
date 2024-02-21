// console.log("Hello World!!!");
// // const { clear } = require('console');
// // console.log(global);

// // const os = require('os')

// // console.log(os.type());
// // console.log(os.version());
// // console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);
// console.log(path.parse(__filename));

// console.log(path.dirname(__filename))

// console.log(__dirname);

const path = require('path')
console.log(__dirname);

console.log(__filename);

console.log(path.parse(__filename));
//math

const math = require('./math')
console.log(math.add())
