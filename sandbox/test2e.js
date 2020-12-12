const fs = require('fs');

let myInvJSON = fs.readFileSync('inventoryfile.json');
let myInvTXT = fs.readFileSync('inventoryfile.txt');

console.log(myInvJSON[0].toString());
console.log(myInvTXT[0].toString());

/*
91
91
This is the equivalent of the first character of what we were expecting: [.
*/