const fs = require("fs");

// Original data...
let albums = [{
        album: "Time Out",
        genre: "West Coast cool jazz"
    },
    {
        album: "A Love Supreme",
        genre: "Modal jazz"
    }
];

// New data...
let newItem = {
    album: "The Dark Side of the Moon",
    genre: "Progressive rock"
};

try {
    var existingAlbums = fs.readFileSync("albums.json");
    existingAlbums = JSON.parse(existingAlbums);
    //var repeatCheck = verifyRepeats(existingAlbums, newItem);
    var repeatCheck = existingAlbums.some(function (item) {
        if (item.album === newItem.album) {
            return true;
        }
    });

    //console.log("repeat: " + repeatCheck);
    if (!repeatCheck) {
        existingAlbums.push(newItem);
        let albumJson = JSON.stringify(existingAlbums);
        fs.writeFileSync("albums.json", albumJson);
        console.log(newItem.album + " has been saved");
    } else {
        console.log(newItem.album + " already exists.");
    }
} catch (error) {
    // Preparing to write to file... (serializing)
    let albumsJSON = JSON.stringify(albums);

    // Write or append to file...
    fs.appendFileSync("albums.json", albumsJSON);
}