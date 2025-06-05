//Arrays

// array is a object and storing of multiple items under a variable
const myArr = [0, 1, 2, 4, 7, "abhijit"];

console.log(myArr[5])

//array-copy-operation create sh allow copies

const myHeros = ["superman" ,"ironman" , "thor"];

const myArr2 = new Array(1,2,3,4);

console.log(myArr2[1])


//Array method


myArr.push(6) //add value in array last
myArr.push(9)
myArr.pop() //remove lvalue in  array last 
console.log(myArr) 

myArr.unshift(9) // add value in  array start
myArr.shift() // remove value in  array start
console.log(myArr)


console.log(myArr.includes(9)); //question in arry 9 present he ya nehi
console.log(myArr.indexOf(4)); //value kis index pe he show karega

const newArr = myArr.join()
console.log(myArr)
console.log( newArr) //change string


// //Slice , Splice
const iArr = [1,3,4,6,8,11,90,554,45]

const myn1 = iArr.slice(1, 3) //return a section of array (select value index 1 to index 3  but print 1 to 2 index 3 is not showing)

console.log(myn1)
console.log(iArr)




const myn2 = iArr.splice(1, 3) //return a section of array (select index 1 to index 3 sbhowing proper index 1 to 3)
console.log(myn2)
console.log(iArr) //cut the splice value a another array









