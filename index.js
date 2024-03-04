// import {x} from './app'

// console.log("hello world");
// var a = 10;
// var b = 20;
// var c = 30;
// console.warn(a+b+c);




// const arr = [2,4,7,1,3,8,3];
// console.log(arr);
// const app = require('./app');

// console.log(app);
// console.log(app.x);
// console.log(app.y);
// console.log(app.z());


// const arr = [2,4,7,1,3,8,3];
// arr.filter( (item) => {
//     console.log(item);
// }); 

// const result = arr.filter( (item) => {
//     return item === 3 ;
// });
// console.log(result);


// globel and non globel module
// const fs = require('fs');
// fs.writeFileSync("hello.txt","code step by step");
// console.log(__dirname);
// console.log(__filename);
// const fs = require('fs').writeFileSync;
// fs("abc.txt", "abc");


// handle and create server
// const http = require('http'); 

// http.createServer( (req,res) => {
//     res.write("<h1> Hello this is sandeep garg </h1>");
//     res.end();
// }).listen(45000);

// function dataControl(req, res){
//         res.write("<h1> Hello this is sandeep garg </h1>");
//         res.end();
// };

// const dataControl = (req, res) => {
//     res.write("<h1> Hello, This is sandeep garg </h1>");
//     res.end();
// };
// http.createServer(dataControl).listen(45000);


// npm i (install module form outside)
const colors = require('colors');
console.log("hello".red);