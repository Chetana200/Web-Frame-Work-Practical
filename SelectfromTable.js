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
    con.query("select * from student",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});