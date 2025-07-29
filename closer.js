// function init() {
//     let name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();


function outer (){
    let username = "Abhijit"

    function inner (){
        function secreate (){
            let secrrate = "123"
        }
        console.log("inner",username);
    }
    function innerTwo(){
        console.log("innerTwo",username);
        console.log(secreate); //not define becuse child child nehi mag sakte
    }
    inner()
    innerTwo()
}
outer()

console.log("too outer",username);
  