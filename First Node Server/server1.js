const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Request URL:", req.url);
    console.log("Request Method:", req.method);
    console.log("Request Headers:", req.headers);

    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`

            <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1>Welcome to My Node.js Server</h1>
                <p>This server is running on <strong>Node.js</strong>.</p>
                <p>Enter Your Details</p>
                <form action="/submit" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="age">Age:</label>
                <input type="number" id="age" name="age"><br><br>
                <input type="submit" value="Submit">
                </form>
            </body>
            </html>
        `);
        res.end(); // Ends the response
    } else if (req.url === "/Product") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Products</title>
            </head>
            <body>
                <h1>Our Products</h1>
                <p>Here are some of the amazing products we offer:</p>
                <ul>
                    <li>Product 1: Amazing Gadget</li>
                    <li>Product 2: Incredible Widget</li>
                    <li>Product 3: Fantastic Tool</li>
                </ul>
            </body>
            </html>
        `);
        res.end(); // Ends the response
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>404 Not Found</title>
            </head>
            <body>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <a href="/">Go Back to Home</a>
            </body>
            </html>
        `);
        res.end(); // Ends the response
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


