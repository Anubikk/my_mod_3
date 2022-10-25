const http = require('http');
const fs = require("fs");

// Allow clients to request any files from the assets folder in your server. To do this, set up your server to look for and send files from the assets folder whenever the URL path starts with /static.

// Parse the route to get the file extension. Based on the file extension, set the header to the appropriate MIME type. Here are some examples of converting a route's file extension to a MIME type and a file path:

// If the server receives a request for GET /static/images/dog.jpg, then the server should look for a file in its memory called dog.jpg in the ./assets/images folder and send that file as a response with the Content-Type header of image/jpeg.

// If the server receives a request for GET /static/css/application.css, then the server should look for a file in its memory called application.css in the ./assets/css folder and send that file as a response with the Content-Type header of text/css.

const server = http.createServer((req, res) => {

  //Intructor code
  const getContentType = (filePath) => {
    const extension = filePath.split(".")[1]
    console.log("extension", extension)

    switch(extension){
      case "css":
        return 'text/css';
      case "jpg":
        return "image/jpeg";
      default:
        return "text/plain"
    }
  }
  if(req.method === "GET" && req.url.startsWith("/static")) {
    const urlparts = req.url.split("/static");
    console.log("url parts ", urlparts);
    const path = urlparts[urlparts.length -1];
    const contentType = getContentType(path);
    const resBody = fs.readFileSync("./assets" + path);
    res.statusCode = 200;
    res.setHeader("Content-Type", contentType )
    return res.end(resBody)

  }

  if(req.method === "GET" && req.url === "/") {
    const resBody = fs.readFileSync("index.html", "utf-8");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html")
    res.end(resBody)
  }


  // if(req.method === "GET" && req.url === "/") {
  //  const resBody =  fs.readFileSync("./index.html");
  //     res.setHeader("Content-Type", "text/html");
  //     res.statusCode = 200;
  //     return res.end(resBody);
  // } else if(req.method === "GET" && req.url === "/static/images/dog.jpg") {
  //  const dog = fs.readFileSync("./assets/images/dog.jpg");
  //     res.setHeader("Content-Type", "image/jpeg");
  //     res.statusCode = 200;
  //     return res.end(dog);
  //   } else if(req.method === "GET" && req.url === "/static/css/application.css") {
  //   const css = fs.readFileSync("./assets/css/application.css");
  //     res.setHeader("Content-Type", "text/css");
  //     res.statusCode = 200;
  //     return res.end(css);
  //   }
});





const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
