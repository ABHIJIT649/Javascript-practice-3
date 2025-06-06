// singleton  


//object literals
// object.create //constrator ,singleton
const mysym = Symbol("key1") //imp question



const jsUser = { //object diclar
    name: "Abhijit",
    "full Name":"Abhijit Mohanty",
    // mysym : "key1", //this process is ok but this datarype is change string
    [mysym]:"key1", //this is correct syntax to add a key value inobject
    age :23,
    location:"odisha",
    email:"abhijit@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","sunday"]
}

//object access

console.log(jsUser.email) //not correct process
console.log(jsUser["email"]) //correct process

// console.log(jsUser.full Name) //this is not working

console.log(jsUser["full Name"])
console.log(typeof jsUser[mysym])


//change object value
jsUser.email = "hitesh@gmail.com"
console.log(jsUser)

//object value can't change ,freez
// Object.freeze(jsUser)
jsUser.email = "amiya@gmail.com"
console.log(jsUser);

//function
jsUser.greeting = function(){
    console.log("Hello Js User"); 
}

jsUser.greeting2 = function(){
    console.log(`Hello Js User,${this.name}`); //refarance object
}

// console.log(jsUser.greeting)  //value op undefine

console.log(jsUser.greeting());
console.log(jsUser.greeting2()) //error this is not a function
