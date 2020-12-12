const fs = require("fs");

// original data...
let albums = [
    {album: "Time Out", genre: "West Coast cool jazz"},
    {album: "A Love Supreme", genre: "Modal jazz"}
    ];

// Preparing to write to file... (serializing)
let albumsJSON = JSON.stringify(albums);

// Write to file...
fs.writeFileSync("albums.json",albumsJSON);