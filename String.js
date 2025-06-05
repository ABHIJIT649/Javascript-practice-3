const name = "Abhijit"
const repoCount = 10

// console.log(name + repoCount + " value")/

//mordern use

console.log(`Hello myname is ${name} and my repo conut is ${repoCount}`)


const gameName = new String('Abhijit -Mohanty -momo')


console.log(gameName[0]); //access keys value index

console.log(gameName.__proto__) //access prototype



console.log(gameName.length) //lengthg
console.log(gameName.toUpperCase()) //uppercase
console.log(gameName.toLocaleLowerCase()) //lower case
console.log(gameName.charAt(3)); //
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4) //last value 4 inclide nehi hota ans=> abhi
console.log(newString)


const anotherString = gameName.slice(-8, 4) // 
console.log(anotherString);


const newStringOne = "  Abhijt  " //cut the value (trim stsrt) , (trim end)
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://abhi.com/abhijit40%mohanty"; //replace 
console.log(url.replace('40%', '-'));

console.log(url.includes('abhi'));
console.log(url.includes('sundar'))


console.log(gameName.split('-'))

// console.log(gameName.small())


