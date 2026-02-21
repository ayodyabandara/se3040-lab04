console.log("Hello from Lab 04!");
const fs = require('fs');

// Write to file
fs.writeFile('file.txt', 'Hello from Lab 04!', (err) => {
  if (err) throw err;
  console.log('File saved!');
});

// Read from file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});
//create a web server
const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Hello World!');
  res.end();
}).listen(8080);

