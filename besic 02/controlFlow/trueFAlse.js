const userEmail = "h@abhijit.ai"

if (userEmail){ //assume karke dtring ke ander value he true ho jata he
    console.log("Got user email");

}else{
    console.log("dont have user email");
}  

// falsy value 

// false value => false, [0 = Zero], -0, BigInt 0n, "", null, undefind, NoN

//Truthy value => "0", 'false', " ", [], {}, function(){}, 


//check array empty he ya nehi

const array = []

if (array.length === 0) {
    console.log("Array is Empty");
}

//object empty he ya nehi check

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty");
}


//operator

//Nullish Coalescing Operator (??) : null undefind

let val1 ;

// val1 = 5 ?? 10; //op=> 5
// val1 = null ?? 10; // op => 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 18

console.log(val1);


// Terniary Operator

// condition ? true : false  

const iceTeaPrice = 100  // one line code

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");