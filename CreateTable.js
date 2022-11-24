var mysql=require('mysql');

let con=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'1984',
    database:"college2"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected!");
    var sql="CREATE TABLE student(name VARCHAR(255),class VARCHAR(255))";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Table Created");
    });
});