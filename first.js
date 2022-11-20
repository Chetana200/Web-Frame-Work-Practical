var events=require('events');
 var eventEmitter=new events.EventEmitter();
 var connectHandler=function connected()
 {
     console.log('Connection Successful');
     eventEmitter.emit('data recieved');
 }
 eventEmitter.on('connection',connectHandler);
 eventEmitter.on('data recieved',function(){
     console.log('data recieved sucessfuly');});
     eventEmitter.emit('connection');
     
console.log("Program ended");