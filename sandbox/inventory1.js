const fs = require('fs');

// Original data...
let employees = [
    {firstName: "Tony", lastName: "deAraujo"},
    {firstName: "Mary", lastName: "Brown"}
];

// Stringify.....
let employeesJson = JSON.stringify(employees);

//Save to an external .json file....
fs.writeFileSync('myemployees.json', employeesJson);

// Reading an external file...
let employeesList = fs.readFileSync('myemployees.json');
employeesList = JSON.parse(employeesList);
console.log(employeesList);
console.log(employeesList[1].lastName);

/*
First output...
[ { firstName: 'Tony', lastName: 'deAraujo' },
  { firstName: 'Mary', lastName: 'Brown' } ]

Second output...
Brown
*/