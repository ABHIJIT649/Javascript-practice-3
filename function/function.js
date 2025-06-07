function sayMyName() {
  console.log("H");
  console.log("j");
  console.log("H");
  console.log("j");
}

sayMyName; //refarance
// sayMyName() //executation

// function addTwoNumber(Number1, Number2){   //function ke defination under is called parameter

//    console.log( Number1 + Number2); //with out function call  umber that is argument

// }

addTwoNumber(2, 4); //function call number is called argument

function addTwoNumber(Number1, Number2) {
  //    let result = Number1 + Number2
  //    return result
  //    console.log("abhijit")   //return kr bad kabhi exicute nehi hota/

  return Number1 + Number2;
}

const result = addTwoNumber(6, 4); //output 10

// console.log("result:",result)  //op unfdefine

function loginUserMessage(username) {
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Abhijit"))

//example

function loginUserMessage2(username) {
  if (username === undefined) {
    console.log("plese enter a username");
    return;
  }
  return `${username} just loggid in`;
}

console.log(loginUserMessage2());


//example 2

function loginUserMessage2(username) {
    if (!username) {  // ! exlamertory is ame false => true ,true=> false 
      console.log("plese enter a username");
      return;
    }
    return `${username} just loggid in`;
  }
  
  console.log(loginUserMessage2("Abhijit"));
  

  //example 3

function loginUserMessage2(username = "sam") {  //kabhi undefind me jayega hi nhei
    if (username === undefined) {
      console.log("plese enter a username");
      return;
    }
    return `${username} just loggid in`;
  }
  
  console.log(loginUserMessage2()); // function call me value nehi diya to allways ayega //sam is just logged in
  
