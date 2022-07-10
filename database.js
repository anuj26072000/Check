var mysql=require('mysql');
var conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Kaushik@076',
    database:'userexel'
});

conn.connect(function(err){
    if(err) throw err;
    console.log("database is connected successfully");
});
module.exports=conn;