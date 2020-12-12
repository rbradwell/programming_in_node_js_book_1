var myArray = [
    {item: 'paper',color: 'white'},
    {item: 'pencil', color: 'black'} 
    ];

var myArrayStringifyed = JSON.stringify(myArray);

console.log(myArrayStringifyed); 

// JSON always uses ""
/*
 [{"item":"paper","color":"white"},{"item":"pencil","color":"black"}]

 */