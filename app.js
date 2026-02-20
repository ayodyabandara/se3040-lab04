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
