var http = require('http');

var server = http.createServer((req, res) => {
  console.log(req.method + ': ' + req.url);
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>hello node</h1>');
});

server.listen(8084);

console.log('listen at 127.0.0.1:8084');
