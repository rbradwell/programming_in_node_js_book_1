// require the files produced by stringify3.js

let myInvJSON = require('./inventoryfile.json');
let myInvTXT = require('./inventoryfile.txt');

console.log("J: ",myInvJSON);
console.log("T: ",myInvTXT);

/*
J:  [
  { item: 'CPU', description: 'Desktop computer CPU' },
  { item: 'Monitor', description: 'LCD monitor' }
]
T:  {}
*/