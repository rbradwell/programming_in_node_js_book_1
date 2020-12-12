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
    var existingAlbums = fs.readFileSync("albums.json");
    existingAlbums = JSON.parse(existingAlbums);
    //console.log("existingAlbums: ", existingAlbums);
    existingAlbums.push(newItem);
    let albumJson = JSON.stringify(existingAlbums);
    fs.writeFileSync("albums.json", albumJson);

} catch (error) {
    // Preparing to write to file... (serializing)
    let albumsJSON = JSON.stringify(albums);

    // Write or append to file...
    fs.appendFileSync("albums.json", albumsJSON);

}