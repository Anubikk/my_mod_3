const http = require('http');
const fs = require('fs');

const { Player } = require('./game/class/player');
const { World } = require('./game/class/world');

const worldData = require('./game/data/basic-world-data');

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {

  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => { // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
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
    }

    /* ======================== ROUTE HANDLERS ========================== */
    // Phase 1: GET /
//     In the server.js file under Phase 1, create a route handler for GET /.

// The route handler will display the new-player.html view page. (Don't forget to specify that the encoding is utf-8 for the fs.readFileSync)

// Set your route up so that it will replace the availableRooms variable with the string returned from the availableRoomsToString() instance method, which was imported from the World instance at the top of the file.

// Complete the status code, headers, etc.

   if(req.method === 'GET' && req.url === '/') {
      let view = fs.readFileSync('./views/new-player.html', 'utf-8');
      view = view.replace('{{availableRooms}}', world.availableRoomsToString());
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(view);
      res.end();
    }
    

    // Phase 2: POST /player

    // Phase 3: GET /rooms/:roomId

    // Phase 4: GET /rooms/:roomId/:direction

    // Phase 5: POST /items/:itemId/:action

    // Phase 6: Redirect if no matching route handlers
  })
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
