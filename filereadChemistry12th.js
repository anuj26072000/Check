const fs = require('fs');
let mySql=require('mysql');
let express=require('express')
let app =express();
let bodyParser= require('body-parser')
var path=require('path');
var session=require('express-session');

let readFile = fs.readFileSync("./outputChemistry12th.json","utf8")

var js=JSON.parse(readFile);
// console.log(js[59]);
for(let i=0;i<js.length;i++){
    console.log(Object.values(js[i]));  
}