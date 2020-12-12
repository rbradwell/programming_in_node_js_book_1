const fs = require('fs');

let myInvJSON = fs.readFileSync('inventoryfile.json');
let myInvTXT = fs.readFileSync('inventoryfile.txt');

console.log(myInvJSON);
console.log(myInvTXT);

// default read is UTF-8 bytes. Data is stream.
/*
<Buffer 5b 7b 22 69 74 65 6d 22 3a 22 43 50 55 22 2c 22 64 65 73 63 72 69 70 74 69 6f 6e 22 3a 22 44 65 73 6b 74 6f 70 20 63 6f 6d 70 75 74 65 72 20 43 50 55 ... 50 more bytes>
<Buffer 5b 7b 22 69 74 65 6d 22 3a 22 43 50 55 22 2c 22 64 65 73 63 72 69 70 74 69 6f 6e 22 3a 22 44 65 73 6b 74 6f 70 20 63 6f 6d 70 75 74 65 72 20 43 50 55 ... 50 more bytes>
*/