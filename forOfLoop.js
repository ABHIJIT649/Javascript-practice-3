// for of loop

// [ "", "", ""] => under array string
// [ {} {} {}] => under array in object

// object means arr 
const arr = [ 1, 2, 3, 4, 5]

for (const num  of arr) {
    console.log(num);
}

// using string

const string = [ " abhijit ", " subham" , "Amiya"]
for (const i of string) {
    console.log(i);
}

// Each char print

const greeting = " Hello World"

for (const greet of greeting) {
    console.log(` each char is : ${greet}`);
}

// maps

const map = new Map()

map.set("IN" , "India")
map.set("USA" , "United State of America")
map.set("FR" , "France")
map.set("IN" , "India") // duplicate not allow

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);
}


// object pe for of kam nehi karta
// const myObject = {
//     Game1:'freefire',
//     Game2: 'Bgmi'
// }

// for (const [key , value] of myObject) {
    
//     console.log(key , value);
// }