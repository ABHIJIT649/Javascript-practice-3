// let var const

// let a = 10
// const b = 20
// var c = 30

// {} => scope 
 //if loop ke under likhneko block scope or iske bahar jo he isko kehe te he global scope


// console.log(a);
// console.log(b);
// console.log(c);

// var c  = 300

let a = 400

if (true) {  //block scope
    let a = 10
     const b = 20
     var c = 30
     console.log("inner" ,a); //block scope
}
console.log(a);  //global scope

// console.log(c);
