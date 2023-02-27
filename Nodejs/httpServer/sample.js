const http=require('http')

http.createServer(()=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  console.log("server started")
  res.end();
}).listen(3000)