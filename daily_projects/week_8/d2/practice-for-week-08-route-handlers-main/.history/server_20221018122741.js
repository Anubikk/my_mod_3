const http = require('http');

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }
    // Do not edit above this line
//     - `GET /`
//   - response components:
//     - status code: 200
//     - headers:
//       - Content-Type: text/plain
//     - body: 'Dog Club'
// - `GET /dogs`
//   - response components:
//     - status code: 200
//     - headers:
//       - Content-Type: text/plain
//     - body: 'Dogs index'
    // define route handlers here
    if (req.method === "GET" && req.url === "/") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end("Dog Club");
    } else if (req.method === "GET" && req.url === "/dogs") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end("Dogs index");
    }


  //- `GET /dogs/:dogId`
//   - response components:
//   - status code: 200
//   - headers:
//     - Content-Type: text/plain
//   - body: 'Dog details for dogId: {dogId}' ({dogId} replaced with :dogId
//     route parameter)
// - Hint: Take a look at the end of the instructions for a hint on how to parse
//   route parameter, `:dogId`

   if(req.method === "GET" && req.url.startsWith("/dogs/:dogId")) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      const dogId = req.url.split("/")[2]; //declare dogId to be the second element of the array
      return res.end(`Dog details for dogId: ${dogId}`);
    }

// - `GET /dogs/new`
// - response components:
//   - status code: 200
//   - headers:
//     - Content-Type: text/plain
//   - body: 'Dog create form page'

    if(req.method === "GET" && req.url === "/dogs/new") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end("Dog create form page");
    }


// - `POST /dogs`
// - response components:
//   - status code = 302;
//   - headers:
//     - Location: /dogs/:newDogId (`:newDogId` is generated by calling
//       the `getNewDogId()` function defined at the top of the `server.js`
//       file)
//   - body: none

    if(req.method === "POST" && req.url === "/dogs") {
      res.statusCode = 302;
      res.setHeader("Location", `/dogs/${getNewDogId()}`);
      return res.end();
    }

// - `POST /dogs/:dogId`
// - response components:
//   - status code = 302;
//   - headers:
//     - Location: /dogs/:dogId (`:dogId` is the `:dogId` route parameter)
//   - body: none

    if(req.method === "POST" && req.url.startsWith("/dogs/:dogId")) {
      res.statusCode = 302;
      const dogId = req.url.split("/")[2];
      res.setHeader("Location", `/dogs/${dogId}`);
      return res.end();
    }

// - `GET /dogs/:dogId/edit`
// - response components:
//   - status code: 200
//   - headers:
//     - Content-Type: text/plain
//   - body: 'Dog edit form page for dogId: {dogId}' ({dogId} replaced with
//     :dogId route parameter)

    if(req.method === "GET" && req.url.startsWith("/dogs/:dogId/edit")) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      const dogId = req.url.split("/")[2];
      return res.end(`Dog edit form page for dogId: ${dogId}`);
    }


    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('No matching route handler found for this endpoint');
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
