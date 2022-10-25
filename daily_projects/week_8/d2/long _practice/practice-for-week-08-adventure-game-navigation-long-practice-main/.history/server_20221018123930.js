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

   if(req.method === 'GET' && req.url === '/') { // If the request is a GET request and the url is '/'
      let view = fs.readFileSync('./views/new-player.html', 'utf-8'); // Read the new-player.html file
      view = view.replace('{{availableRooms}}', world.availableRoomsToString()); // Replace the availableRooms variable with the string returned from the availableRoomsToString() instance method
      res.writeHead(200, {'Content-Type': 'text/html'}); // Set the status code and headers
      res.write(view); // Write the view to the response
      res.end(); // End the response
    }

    // Phase 2: POST /player
//     Create a route handler for POST /player.

// Obtain the room ID and name from the request. (Hint: You can use destructuring to achieve this!)

// Create a new player with the info obtained. Make sure you are NOT creating the player directly with the room ID, and is instead passing in the room object of the chosen room into the new player.

// Redirect the client to the route /rooms/:roomId where the :roomId route parameter is replaced with the starting room of the newly created player.

     if(req.method === 'POST' && req.url === '/player') { // If the request is a POST request and the url is '/player'
      const { roomId, name } = req.body; // Obtain the room ID and name from the request
      player = new Player(name, world.getRoomById(roomId)); // Create a new player with the info obtained
      res.writeHead(302, {'Location': `/rooms/${player.room.id}`}); // Redirect the client to the route /rooms/:roomId
      res.end(); // End the response
    }

    // Phase 3: GET /rooms/:roomId

//     Note: All route handlers after phase 2 should require a player. Type in your code before the route handler of Phase 3 to redirect to the home page if there is no player. Since redirect will be use a lot, consider adding a helper function for that.

// Create a route handler for GET /rooms/:roomId.

// Obtain the current room Id by parsing the URL.

// Update the html file for room.html to replace all the variables with details obtained from the player's current room.

// Complete the status code, headers, etc.

// Make sure to test this route by starting the server and on the browser, navigate to the home page, submit a new player, and make sure the redirect from phase 2 works.

// Redirect to the current room
// If the specified :roomId route parameter is not the roomId of the player's current room, then the server's response should redirect the client to the correct current room of the player instead of displaying the room.html view page as the response.

   if(!player) { // If there is no player
      res.writeHead(302, {'Location': '/'}); // Redirect to the home page
      res.end(); // End the response
    } else if(req.method === 'GET' && req.url.startsWith('/rooms/')) { // If the request is a GET request and the url starts with '/rooms/'
      const roomId = req.url.split('/')[2]; // Obtain the current room Id by parsing the URL
      if(roomId !== player.room.id) { // If the specified :roomId route parameter is not the roomId of the player's current room
        res.writeHead(302, {'Location': `/rooms/${player.room.id}`}); // Redirect the client to the correct current room of the player
        res.end(); // End the response
      } else { // If the specified :roomId route parameter is the roomId of the player's current room
        let view = fs.readFileSync('./views/room.html', 'utf-8'); // Read the room.html file
        view = view.replace('{{roomId}}', player.room.id); // Replace the roomId variable with the player's current room ID
        view = view.replace('{{roomName}}', player.room.name); // Replace the roomName variable with the player's current room name
        view = view.replace('{{roomDescription}}', player.room.description); // Replace the roomDescription variable with the player's current room description
        view = view.replace('{{roomExits}}', player.room.exitsToString()); // Replace the roomExits variable with the string returned from the exitsToString() instance method
        view = view.replace('{{roomItems}}', player.room.itemsToString()); // Replace the roomItems variable with the string returned from the itemsToString() instance method
        res.writeHead(200, {'Content-Type': 'text/html'}); // Set the status code and headers
        res.write(view); // Write the view to the response
        res.end(); // End the response
      }
    }
//     Note: just like in the previous phase, if the specified :roomId route parameter is not the roomId of the player's current room, then the server's response should redirect the client to the correct current room of the player instead of moving the player to a different room.

// Create a route handler for GET /rooms/:roomId/:direction

// Obtain the current room Id and the directions by parsing the URL

// Make sure to check that the roomId matches the player's current room

// Use a method imported from the Player class to move the player (Hint: the move direction does not take the whole word, just the first letter of each direction.)

// Redirect the player to the next room

// Try to implement a try/catch to redirect the player back to the current room in case of errors!

// Make sure to test this route by making the request on Postman. After you confirm the response components in Postman, try navigating to another room using one of the links in the room detail page on the browser

    if(req.method === 'GET' && req.url.startsWith('/rooms/') && req.url.split('/').length === 4) { // If the request is a GET request and the url starts with '/rooms/' and the url has 4 parts
      const [roomId, direction] = req.url.split('/').slice(2); // Obtain the current room Id and the directions by parsing the URL
      if(roomId !== player.room.id) { // If the roomId does not match the player's current room
        res.writeHead(302, {'Location': `/rooms/${player.room.id}`}); // Redirect the player to the current room
        res.end(); // End the response
      } else { // If the roomId matches the player's current room
        try { // Try to move the player
          player.move(direction); // Move the player
          res.writeHead(302, {'Location': `/rooms/${player.room.id}`}); // Redirect the player to the next room
          res.end(); // End the response
        } catch(err) { // If there is an error
          

    // Phase 4: GET /rooms/:roomId/:direction

    // Phase 5: POST /items/:itemId/:action

    // Phase 6: Redirect if no matching route handlers
  })
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));