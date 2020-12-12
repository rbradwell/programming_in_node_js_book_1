const fs = require("fs");

function saver(albums, newItem) {
    try {
        // Read from file...
        var existingAlbums = fs.readFileSync("albums.json");

        // Parse JSON data to JavaScript format...
        existingAlbums = JSON.parse(existingAlbums);

        // Check to see if there are any repeats...
        var repeatCheck = existingAlbums.filter(function (item) {
            if (item.album === newItem.album) {
                return item;
            }
        });
        // If there are no repeats, push new item into array...
        if (repeatCheck.length <= 0) {
            existingAlbums.push(newItem);
            // Convert array to JSON format...
            let albumJson = JSON.stringify(existingAlbums);
            // Write JSON format to file...
            fs.writeFileSync("albums.json", albumJson);
            // Notify user...
            console.log(newItem.album + " has been saved");
        } else {
            //If new item already exists, notify user...
            console.log(newItem.album + " already exists.");
        }
    } catch (error) {
        // This block only works if TRY fails
        // It is used to create the external file for the first time
        // Preparing to write to file... (Serializing)
        let albumsJSON = JSON.stringify(albums);

        // Write or append to file...
        fs.appendFileSync("albums.json", albumsJSON);
    }
}
module.exports = {
    saver
};