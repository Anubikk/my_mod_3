const http = require('http');
const fs = require('fs');

/* ============================ SERVER DATA ============================ */
let artists = JSON.parse(fs.readFileSync('./seeds/artists.json'));
let albums = JSON.parse(fs.readFileSync('./seeds/albums.json'));
let songs = JSON.parse(fs.readFileSync('./seeds/songs.json'));

let nextArtistId = 2;
let nextAlbumId = 2;
let nextSongId = 2;

// returns an artistId for a new artist
function getNewArtistId() {
  const newArtistId = nextArtistId;
  nextArtistId++;
  return newArtistId;
}

// returns an albumId for a new album
function getNewAlbumId() {
  const newAlbumId = nextAlbumId;
  nextAlbumId++;
  return newAlbumId;
}

// returns an songId for a new song
function getNewSongId() {
  const newSongId = nextSongId;
  nextSongId++;
  return newSongId;
}

/* ======================= PROCESS SERVER REQUESTS ======================= */
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => { // finished assembling the entire request body
    // Parsing the body of the request depending on the "Content-Type" header
    if (reqBody) {
      switch (req.headers['content-type']) {
        case "application/json":
          req.body = JSON.parse(reqBody);
          break;
        case "application/x-www-form-urlencoded":
          req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ========================== ROUTE HANDLERS ========================== */

    // GET /artists
    if (req.method === "GET" && req.url === "/artists") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(artists));
    }

    // GET /artists/:artistId
    if (req.method === "GET" && req.url.match(/\/artists\/\d+$/)) { //URL format is
      const artistId = Number(req.url.split("/")[2]);
      const artist = artists.find((artist) => artist.id === artistId);
      if (artist) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(artist));
      }
    }
    //Add an artist
    if (req.method === "POST" && req.url === "/artists") {
      const newArtist = {
        id: getNewArtistId(),
        name: req.body.name,
        genre: req.body.genre,
      };
      artists.push(newArtist);
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(newArtist));
    }
    //Edit a specified artist by artistId
    if (req.method === "PUT" && req.url.match(/\/artists\/\d+$/)) {
      const artistId = Number(req.url.split("/")[2]);
      const artist = artists.find((artist) => artist.id === artistId);
      if (artist) {
        artist.name = req.body.name;
        artist.genre = req.body.genre;
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(artist));
      }
    }
    //Delete a specified artist by artistId
    if (req.method === "DELETE" && req.url.match(/\/artists\/\d+$/)) {
      const artistId = Number(req.url.split("/")[2]);
      const artist = artists.find((artist) => artist.id === artistId);
      if (artist) {
        artists = artists.filter((artist) => artist.id !== artistId);
        res.statusCode = 204;
        res.end();
      }
    }
    //Delete a specified artist by artistId
    if (req.method === "DELETE" && req.url.match(/\/artists\/\d+$/)) {
      const artistId = Number(req.url.split("/")[2]);
      const artist = artists.find((artist) => artist.id === artistId);
      if (artist) {
        artists = artists.filter((artist) => artist.id !== artistId);
        res.statusCode = 204;
        res.end();
      }
    }
    //Get all albums of a specific artist based on artistId
    if (req.method === "GET" && req.url.match(/\/artists\/\d+\/albums$/)) {
      const artistId = Number(req.url.split("/")[2]);
      const artist = artists.find((artist) => artist.id === artistId);
      if (artist) {
        const artistAlbums = albums.filter(
          (album) => album.artistId === artistId
        );
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(artistAlbums));
      }
    }
    //Get a specific album's details based on albumId
    if (req.method === "GET" && req.url.match(/\/albums\/\d+$/)) {
      const albumId = Number(req.url.split("/")[2]);
      const album = albums.find((album) => album.id === albumId);
      if (album) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(album));
      }
    }
    //Add an album to a specific artist based on artistId
    if (req.method === "POST" && req.url.match(/\/artists\/\d+\/albums$/)) {
      const artistId = Number(req.url.split("/")[2]);
      const artist = artists.find((artist) => artist.id === artistId);
      if (artist) {
        const newAlbum = {
          id: getNewAlbumId(),
          artistId: artistId,
          name: req.body.name,
          year: req.body.year,
        };
        albums.push(newAlbum);
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(newAlbum));
      }
    }
    //Edit a specific album based on albumId
    if (req.method === "PUT" && req.url.match(/\/albums\/\d+$/)) {
      const albumId = Number(req.url.split("/")[2]);
      const album = albums.find((album) => album.id === albumId);
      if (album) {
        album.name = req.body.name;
        album.year = req.body.year;
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(album));
      }
    }
    //Delete a specific album based on albumId
    if (req.method === "DELETE" && req.url.match(/\/albums\/\d+$/)) {
      const albumId = Number(req.url.split("/")[2]);
      const album = albums.find((album) => album.id === albumId);
      if (album) {
        albums = albums.filter((album) => album.id !== albumId);
        res.statusCode = 204;
        res.end();
      }
    }
    //Get all songs of a specific album based on albumId
    if (req.method === "GET" && req.url.match(/\/albums\/\d+\/songs$/)) {
      const albumId = Number(req.url.split("/")[2]);
      const album = albums.find((album) => album.id === albumId);
      if (album) {
        const albumSongs = songs.filter((song) => song.albumId === albumId);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(albumSongs));
      }
    }
    //Get all songs of a specific album based on albumId
    if (req.method === "GET" && req.url.match(/\/albums\/\d+\/songs$/)) {
      const albumId = Number(req.url.split("/")[2]);
      const album = albums.find((album) => album.id === albumId);
      if (album) {
        const albumSongs = songs.filter((song) => song.albumId === albumId);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(albumSongs));
      }
    }
    //Get all songs of a specified trackNumber
    if (req.method === "GET" && req.url.match(/\/albums\/\d+\/songs$/)) {
      const albumId = Number(req.url.split("/")[2]);
      const album = albums.find((album) => album.id === albumId);
      if (album) {
        const albumSongs = songs.filter((song) => song.albumId === albumId);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(albumSongs));
      }
    }



    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.write("Endpoint not found");
    return res.end();

  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
