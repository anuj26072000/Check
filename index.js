const readFile=require('./filereadPhysics')
let mySql=require('mysql');
let express=require('express')
let app =express();
let bodyParser= require('body-parser')
const fs=require('fs');
var path=require('path');
var session=require('express-session');



// console.log(readFile);
// app.post('/',(req,res)=>{
  




//     for(let i in readFile){
//         console.log(Object.values(readFile[]));
//     }   
// })
// console.log(Object.value(readFile[0]));
var js=JSON.parse(readFile)[0];
console.log(Object.values(js))


