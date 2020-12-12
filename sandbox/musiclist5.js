const fs = require("fs");

// Original data...
let albums = [
    {album: "Time Out", genre: "West Coast cool jazz"},
    {album: "A Love Supreme", genre: "Modal jazz"}
    ];

// New data...
let newItem = {
    album: "The Dark Side of the Moon",
    genre: "Progressive rock"
};

try {
    // reads from file produced my musiclist3.js and appends item to json struct
    var existingAlbums = fs.readFileSync("albums.json");
    existingAlbums = JSON.parse(existingAlbums);
    //console.log("existingAlbums: ", existingAlbums);
    existingAlbums.push(newItem);
    let albumJson = JSON.stringify(existingAlbums);
    fs.writeFileSync("albums.json", albumJson);

} catch (error) {
    console.log("You are trying to save data on a file that does not exist");
}