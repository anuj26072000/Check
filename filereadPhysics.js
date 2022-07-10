const fs = require('fs');
let mysql=require('mysql');
let express=require('express')
let app =express();
let bodyParser= require('body-parser')
var path=require('path');
var session=require('express-session');
const axios = require('axios');
const ejs =require('ejs');
const { execSync } = require('child_process');

let readFile = fs.readFileSync("./outputPhysics11th.json","utf8")
// let parsee=JSON.parse(readFile);
// var conn=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'new-password',
//     database:'test'
// });

// conn.connect(function(err){
//     if(err) throw err;
//     console.log("database is connected successfully");
// });
// console.log(readFile)
var js=JSON.parse(readFile);
// for(let i=0;i<60;i++){
//     console.log(Object.values(js[i]));
//       // console.log(js[i]);
//   console.log(js.length);
// }
var valuee =[]
for (let i=0 ;i<5;i++){
    valuee[i]=Object.values(js[i])  
}
// console.log(valuee);


  valuee.forEach(post => {
    axios.post('http://192.168.29.45:4003/data', {
       body: post,
    })
   
       // Print response
       .then (response => {
          const val= response.data.body
          console.log(val)
        //   console.log(`Post ${id}: ${title}`)
        // console.log(valuee)
       })
   
       .catch(error => console.log(error))
 })
 app.listen(4003                                                                                                                                                                                                                                        ,()=>{
    console.log("HELLO")
 })                                                                                                                 