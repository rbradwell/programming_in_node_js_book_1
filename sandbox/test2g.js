const fs = require('fs');

let myInvJSON = fs.readFileSync('inventoryfile.json');
let myInvTXT = fs.readFileSync('inventoryfile.txt');

myInvJSON = JSON.parse(myInvJSON);
myInvTXT = JSON.parse(myInvTXT);

console.log(myInvJSON[0]);
console.log(myInvTXT[0]);

console.log(myInvJSON[0].item);
console.log(myInvTXT[0].item);

/*
{ item: 'CPU', description: 'Desktop computer CPU' }
{ item: 'CPU', description: 'Desktop computer CPU' }
CPU
CPU
*/