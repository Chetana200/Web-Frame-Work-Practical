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
    var sql="INSERT INTO student(name,class) VALUES('Pranjal','Msc'),('Satyam','MSC')";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Record inserted");
    });
});