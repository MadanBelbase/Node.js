// Import the built-in 'http' module to create an HTTP server
const http = require('http');

// Create an HTTP server using the 'createServer' method
// The callback function is executed each time a request is received
const server = http.createServer((req, res) => {
    // Log the incoming request object to the console
    console.log(req);
});

// Define the port number on which the server will listen
const port = 3000;

// Start the server and listen on the specified port
// The callback function is executed once the server starts successfully
server.listen(port, () => {
    console.log(`Server running on the address http://localhost:${port}`);
});






