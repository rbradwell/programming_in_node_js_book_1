/* THIS SAMPLE CODE WILL NOT WORK */
const fs = require('fs');

// Original data...
let employees = [
    {firstName: "Tony", lastName: "deAraujo"},
    {firstName: "Mary", lastName: "Brown"}
];

// Stringify.....
let employeesJson = JSON.stringify(employees);

//Save to an external .json file....
//fs.writeFileSync('myemployees.json', employeesJson);

fs.writeFileSync(
'myemployees.json',employeesJson,function(e){});


// Reading an external file...
//let employeesList = fs.readFileSync('myemployees.json');
let employeesList;
fs.readFile('myemployees.json', function (err,data){
  if (err){
    throw err;
  }  
  employeesList =  data; 
});


employeesList = JSON.parse(employeesList);
console.log(employeesList);
console.log(employeesList[1].lastName);

/*
error

because readFile is asynch
*/

