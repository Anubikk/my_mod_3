const http = require('http');
const fs = require("fs");

// Allow clients to request any files from the assets folder in your server. To do this, set up your server to look for and send files from the assets folder whenever the URL path starts with /static.

// Parse the route to get the file extension. Based on the file extension, set the header to the appropriate MIME type. Here are some examples of converting a route's file extension to a MIME type and a file path:

// If the server receives a request for GET /static/images/dog.jpg, then the server should look for a file in its memory called dog.jpg in the ./assets/images folder and send that file as a response with the Content-Type header of image/jpeg.

// If the server receives a request for GET /static/css/application.css, then the server should look for a file in its memory called application.css in the ./assets/css folder and send that file as a response with the Content-Type header of text/css.

const server = http.createServer((req, res) => {
     const index = fs.readFileSync('./index.html');
      return res.end(index);

      if(req.url === '/static/images/dog.jpg'){
        const dog = fs.readFileSync('./assets/images/dog.jpg');
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        return res.end(dog);
      } else if(req.url === '/static/css/application.css'){
        const css = fs.readFileSync('./assets/css/application.css');
        res.writeHead(200, {'Content-Type': 'text/css'});
        return res.end(css);
      }
      




});




const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
