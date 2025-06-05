//Dates

let myDate = new Date ()
console.log(myDate . toString())
console.log(myDate . toDateString())
console.log(myDate . toISOString())
console.log(myDate . toLocaleDateString())
console.log(myDate . toLocaleString())


console.log(typeof myDate) //there are object type of adat


// let myCreatedDate = new Date (2025, 0, 23)
// let myCreatedDate = new Date (2025, 0, 23,5,3)

// let myCreatedDate = new Date ("2015-01-14")

let myCreatedDate = new Date ("01-14-2015")
console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getDate())

console.log(Math.floor(Date.now()/1000));




let newDate = new Date()
console.log(newDate.getMonth()+1)


//imp

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}))


