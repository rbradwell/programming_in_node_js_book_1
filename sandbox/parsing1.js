var myArray = [
    {item: 'paper',color: 'white'},
    {item: 'pencil', color: 'black'} 
    ];

// Serialize myArray and assign the result to a variable
var myArrayStringifyed = JSON.stringify(myArray);

console.log(myArrayStringifyed); 

// De-serializing the contents of myArrayStringifyed
var myArray2 = JSON.parse(myArrayStringifyed);

console.log(myArray2);

/* First output:
 [{"item":"paper","color":"white"},{"item":"pencil","color":"black"}]
 */

/* Second output:
 [ { item: 'paper', color: 'white' },
   { item: 'pencil', color: 'black' }
 ]
*/