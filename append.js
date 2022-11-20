var fs=require('fs');
fs.readFile('first.txt',function(err,data)
{
    fs.appendFile('second.txt',data,function(err)
    {
        if(err) throw err;
        console.log('Saved');
    });
});