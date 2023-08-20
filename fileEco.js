var server = require('http');
var fs  = require('fs')


server.createServer(function(req , res){

    fs.readFile('index.html' , function(err , data){
        if (err) return err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
    
}).listen(8000);


fs.appendFile("demo1.txt" , "this iss vineet " , function(err){
    if(err) return err;
    console.log("saved");
})

fs.unlink('index1.html' , function(err){
    if(err) return err;
    console.log("File deleted");
})

fs.rename("demo1.txt" , "vineet.txt" , function(err){
    if(err) return err;
    console.log("renamed")
})

fs.open('vineet.txt', 'w', function (err, file) {
    if (err) return err;
    console.log('Saved!');
  });