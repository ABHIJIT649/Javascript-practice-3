//lexical

// function init() {
//     let name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();


// function outer (){
//     let username = "Abhijit"

//     function inner (){
//         function secreate (){
//             let secrrate = "123"
//         }
//         console.log("inner",username);
//     }
//     function innerTwo(){
//         console.log("innerTwo",username);
//         console.log(secreate); //not define becuse child child nehi mag sakte
//     }
//     inner()
//     innerTwo()
// }
// outer()

// console.log("too outer",username);
  

// closer

// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();


//practical example

// document.getElementById('orange').onclick = function(){

//     document.body.style.backgroundColor = "orange"
// }
// document.getElementById('green').onclick = function(){

//     document.body.style.backgroundColor = "green"
// }


function clickHandler(color){
    // document.body.style.backgroundColor = `${color}`
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}
  
document.getElementById('orange').onclick = clickHandler("orange")
document.getElementById('green').onclick = clickHandler("green")