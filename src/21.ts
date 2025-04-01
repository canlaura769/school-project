const fs = require('fs');
const path = require('path');

// Function to read a file and return its content as an array
function readFromFile(filePath) {
  const data = fs.readFileSync(filePath, { encoding: 'utf8' });
  return data.split('\n').map(line => line.trim());
}

// Example usage:
const filePath = __dirname + '/file1.txt';
console.log(readFromFile(filePath));
