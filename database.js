var mysql=require('mysql');

let con=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'1984'
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected!");
    con.query("CREATE DATABASE college2",function(err,result){
        if(err) throw err;
        console.log("Database Created");
    });
});