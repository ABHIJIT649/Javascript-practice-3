// how dose js execute code

//javaScript Executaion context

// => Global Executaion Context 
// => Function Execution Context 
// (optional) => Eval Exection context


// 2 phase 
//memory cteation phase => creation phase
//Execution phase

let val1 = 10;
let val2 = 20;

function addNumber ( num1 , num2 ){
    total = num1 + num2;
    return total
}

rersult1 = addNumber(val1, val2);
rersult2 = addNumber(10,4)

console.log(rersult2);


// 1=> Global Executaion => this

// 2=> memory Phase
   //val1 -> undefind
   //val2 -> undefind
   //addNUmber -> defination
   //result1 -> undefind
   //result2 -> undefind

// 3=> Executation phase 
   // val1 <- 10
   // val <- 20   
   // (new executatinol context)addNumber ---> new variable Envaroment + Execution thread

   // calls tag  //lifo concept 

   //Example 

   function one (){
    console.log("one");
   }

   function two (){
    console.log("two");
   }

   function three (){
    console.log("three");
   }

   one()
   two()
   three()