// if

if(true){  //code execute hoga
   
}

if(false){ //code execute nehi hoga
   
   
}


const isUserLoggedIn = true

if (isUserLoggedIn) {

}

//compare operater => [<, >, <=, >=, ==, !=, ===]

if( 2== "2"){
   console.log("executed");
}


if( 2==="2"){
    console.log("executed");
 }  //=== number number string string check karta he



 //example
 const temp = 41

 if ( temp < 50){
    console.log("less than 50");
 } else{

    console.log("temp is gratter than 50");
 }


 const score = 200

 if(score >100){
    const power = "fly"
    console.log(`user power ${power}`);
 }


 // short hand roteation

//  const balance = 1000

//  if(balance > 500) console.log("test"),
//  console.log("test2 "); //not use 


// example 2 , 3 condition check

const balance = 1000

if(balance < 500){
  console.log("less than 500");
} else if(balance < 750){
  console.log("less than 750");
} else if (balance < 900){
    console.log("less than 900");
} else  {
    console.log("less than 1200");
}

 //examle
const userloggedIn = true
const debitCard = true
const Atmcard = true 
const loggedInfromGoogle =false
const loggedInfromEmail =true

if (userloggedIn && debitCard && Atmcard ){
  console.log("Allow to buy course");
}
if(loggedInfromGoogle || loggedInfromEmail ){
  console.log("user logged in");
}



