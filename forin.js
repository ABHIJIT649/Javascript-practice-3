 // for in in object
const myObject = {
    js : "javaScript",
    cpp : "c++",
    rp : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in in array

const programing = ["js", "c++" , "html" , "css"]

for (const key in programing) {
   
    console.log(programing[key]);
}

// for in loop in map

// const map = new Map()
// map.set("IN" , "India")
// map.set("USA" , "United State of America")
// map.set("FR" , "France")
// map.set("IN" , "India")

// for (const key in map) {
//     console.log(key);
// } // execute nehi hoga kyu ki ke ittirate nehi he