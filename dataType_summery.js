// # primitive

// 7 types : String, Number, boolean, Null, Undefined, Symbol, BigInt

const  score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
 let userEmail; //udefiend


 const id = Symbol('123')
  const anotherId = Symbol('123')


  console.log(id === anotherId) //value same becuse return value is not same 


  const bigNumber = 23328782792792811242n
  console.log(typeof bigNumber)


// Reference (# Non primitive )

// 3 typees : Array, Object, Function

//array
const heros = ["ironman", "thor", "batman"]; 

//object
let myObj ={ 
    name : "abhijit",
    age: 22
}

//function
 const  myFunction = function(){ //datatype object function
    console.log("Hello World");
 }


//**************************************** Memory ***************************** */

// stcck memory (primitive)use , heap memory(non-primitive)use
//stack => diclar variable milta he copy value 
 //heap => diclar variable orignal refarance  value milta he


 //Stack
 let myName = "Abhijit Mohanty";

 let anotherName = myName
anotherName = "Amiya Das"

 console.log(anotherName);
 console.log(myName) //only chance second value copy milta he
 
//heap
 let userOne ={
  email: "user@gmail.com",
  upi: "user989ubl"
 }

 let userTwo = userOne

 userTwo.email = "user12@gmail.con"

 console.log(userOne) //both value are same becuse ferarance
 console.log(userTwo)