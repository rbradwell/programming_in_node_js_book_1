// main.js
const filesaver = require("./musiclist14.js");

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

// Saving process call...
filesaver.saver(albums,newItem);
