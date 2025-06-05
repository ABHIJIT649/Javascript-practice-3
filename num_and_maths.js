const score = 400
console.log(score)


const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(typeof balance)

console.log(balance.toFixed(2)) //ans 100.00

const otherNumber = 123.9898 //=>124 ,,23.9898 =>24
console.log(otherNumber.toPrecision(3))


const hundreds = 10000000
console.log(hundreds.toLocaleString( )) //10,000,000

console.log(hundreds.toLocaleString( 'en-IN')) //1,00,00,000


// **************************** maths *************************//

console.log(Math)

console.log(Math.abs(-4)) // +ve rahega -ve +ve  ho jayega

console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))

console.log(Math.min(2,4,6,9,6))
console.log(Math.max(2,4,6,9,6))


//imp

console.log(Math.random());
console.log((Math.random()*10) +1)//  //minimum 1 ayega isisliye use
console.log(Math.floor(Math.random()*10) +1) 

const min = 10
const max = 20


//very impportant
console.log( Math.floor(Math.random() * (max - min + 1)) +10)