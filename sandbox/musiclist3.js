const fs = require("fs");

// original data...
let albums = [
    {album: "Time Out", genre: "West Coast cool jazz"},
    {album: "A Love Supreme", genre: "Modal jazz"}
    ];

// Preparing to write to file... (serializing)
let albumsJSON = JSON.stringify(albums);

// Write to file...
// append to file rather than rewriting each time
//fs.writeFileSync("albums.json",albumsJSON);
fs.appendFileSync("albums.json",albumsJSON);

// not much use however because just duplicating data
