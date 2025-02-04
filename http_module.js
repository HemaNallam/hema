const http = require('http'); // Import the HTTP module

// Create the HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set the status and content type
    res.end('Hello, World!'); // Send the response
});

// Define the port and start the server
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
