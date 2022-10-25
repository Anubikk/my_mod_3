
//  Create a server in the server.js file that sends the following HTML text:

//  <!DOCTYPE html>
//  <html lang="en">
//  <head>
//    <meta charset="UTF-8">
//    <meta name="viewport" content="width=device-width, initial-scale=1.0">
//    <title>Hello World!</title>
//  </head>
//  <body>
//    <h1>Hello there!</h1>
//  </body>
//  </html>
//  Set the response status code to 200, the Content-Type header to the appropriate value, and the response body. Then finish and send the response to the client!

//  Test your server by using Postman. Make a request to your server and examine the response sent back by your server to make sure the status code, headers, and body that you set are all accounted for.

const http = require('http'); //require http module
const server = http.createServer((req, res) => { //create server
    console.log('request object', req); //log request object
  const responseBody = `<!DOCTYPE html> //create response body
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
    </head>
    <body>
    <h1>Hello there!</h1>
    </body>
    </html>`;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
});
