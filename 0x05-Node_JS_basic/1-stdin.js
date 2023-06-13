// 1-stdin.js

const readline = require('readline');

// Create an interface for reading input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display initial message
console.log('Welcome to Holberton School, what is your name?');

// Read user input
rl.on('line', (name) => {
  // Display the name
  console.log(`Your name is: ${name}`);
  
  // Close the program
  console.log('\nThis important software is now closing');
  rl.close();
});
