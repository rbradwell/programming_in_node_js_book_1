const fs = require('fs');

let myInvJSON = fs.readFileSync('inventoryfile.json');
let myInvTXT = fs.readFileSync('inventoryfile.txt');

console.log(myInvJSON.toString());
console.log(myInvTXT.toString());

/*
[{"item":"CPU","description":"Desktop computer CPU"},{"item":"Monitor","description":"LCD monitor"}]
[{"item":"CPU","description":"Desktop computer CPU"},{"item":"Monitor","description":"LCD monitor"}]
*/