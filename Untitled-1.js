/**
 *
 * @param {string} jsonFilePath file path to read json file default set to filePath variable i.e. ./outputPhysics11th.json
 * @param {string} encoding default 'utf8'
 * @returns {promise}
 */
function readFile(jsonFilePath = filePath, encoding = "utf8") {
  return new Promise((resolve, reject) => {
    fs.readFile(jsonFilePath, encoding, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data ? JSON.parse(data) : []);
    });
  });
}

const fs = require('fs');
let mySql=require('mysql');
let express=require('express')
let app =express();
let bodyParser= require('body-parser')
const fs=require('fs');
var path=require('path');
var session=require('express-session');
// // const { parse } = require('path');
// let  physics11= require("./outputPhysics11th.json");
// let readPhysics11= JSON.parse(physics11);
// console.log(typeof(physics11))
let readFile = fs.readFileSync("./outputPhysics11th.json","utf8")
// ,(err,data)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//    try{
//     const studentData=JSON.parse(data);
//     console.log(studentData)
//     readFile = studentData
//    }
//   catch (err){
//     console.log(err);
//   }
   
// });
// console.log(JSON.parse(readFile)[0]);
// var js=JSON.parse(readFile)[0];
// console.log(Object.values(js))

exports.readFile=readFile