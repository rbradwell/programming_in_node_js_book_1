const fs = require('fs');

let inventory = [
  {item: "CPU", description: "Desktop computer CPU"},
  {item: "Monitor", description: "LCD monitor"}
  ];

// Stringify for export
let inventoryString = JSON.stringify(inventory);

fs.writeFileSync("inventoryfile.txt",inventoryString);
fs.writeFileSync("inventoryfile.json",inventoryString);