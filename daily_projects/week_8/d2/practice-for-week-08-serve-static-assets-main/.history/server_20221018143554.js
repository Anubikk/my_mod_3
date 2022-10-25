const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
     const index = fs.readFileSync("index.html");
      res.end(index);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
