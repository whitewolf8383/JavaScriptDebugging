/* Debugging Exercise #8

The following snippet of code is supposed to start the Node.js simple server and display "Hello World" in
the browser window. The code contains multiple errors that prevent it from working. Find and fix the errors.
You may use the Node.js documentation and any other resources for help completing this assignment. */


const http = require('http');     

const hostname = '127.0.0.1';      // (1) Corrected by adding .1 to address
const port = 3000;                

const server = http.createServer((req, res) => {                // (1) corrected spelling of response -> res            
  res.writeHead(200, 'Content-Type', 'text/plain');  // (1) corrected writeHead() function spelling and shortened code by moving 200 status
  res.end('Hello, World!\n');                       
}).listen(port, hostname, () => {   // (1) Corrected spelling, but decided to move function up by chaining the listen fucntion
  console.log(`Server running at http://${hostname}:${port}/`); // (1) Changed ' to `
});