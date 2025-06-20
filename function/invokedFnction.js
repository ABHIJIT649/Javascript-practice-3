// immediately Invoked  Function Expression (IIFE)

// function chai (){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai (){  //name IIFE
    console.log(`DB CONNECTED`);
}) (); // two IIFE use ; this

//arrow function

(  (name)=>{  //unName IIFE
    console.log(`DB CONNECTED SUCESSFULL ${name}`);
})(`Amiya`)