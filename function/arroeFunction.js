//this keyword current context ke bareme batata he

const user = { //object
   username: "Abhijit",
   price:999,

   wellcomeMessage: function(){
    console.log(`${this.username} ,wellcome to website`); //user ke ander sabko access karne kiliye use hota he
    console.log(this);
   }
}

user.wellcomeMessage()
user.username = "Subham" //context mean value ,value change current so pring subham
user.wellcomeMessage()

// console.log(this);



function chai (){
    let username = "hitesh"
    console.log(this.username); //function ke under this kam nehi karta only object me kam karta he


}

chai()


// const chai2 = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai2()


const chai2 = () => {  // => use bangaya arrow function
    let username = "hitesh"
    console.log(this);
}
chai2() //{} empty function


const chai3 = () => {  // => use bangaya arrow function
    let username = "hitesh"
    console.log(this.username);
}
chai3()  //undefind


// const addTwoNumber = (num1, num2) => { //num1 , num2 parameter
//    return num1 + num2
// }

// console.log(addTwoNumber(4,5)); //{ } => use so return keyword use hoga


//or  empiset return not use parantsish

// const addTwoNumber = (num1, num2) =>  num1 + num2 //num1 , num2 parameter

//or process

// const addTwoNumber = (num1, num2) =>  (num1 + num2)  // use () not use return keuywod

 //or object return

//  const addTwoNumber = (num1, num2) =>  {username: "Mohanty"}
 
//  console.log(addTwoNumber(4,5)); // undefind

 const addTwoNumber = (num1, num2) =>  ({username: "Mohanty"})
 
 console.log(addTwoNumber(4,5));  //op => { username: 'Mohanty' }


 const myArray = [2, 4, 6, 7,3]

//  myArray.forEach()