const fs = require('fs');

// Write to file
fs.writeFile('file.txt', 'Hello from Lab 04!', function(err) {
  if (err) throw err;
  console.log('File saved!');
});

// Read file
fs.readFile('file.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log('File content: ' + data);
});
