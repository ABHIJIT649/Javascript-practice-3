const coading = ["js" , "ruby", "java", "python", "cpp"]

 const values = coading.forEach( (item) =>{
    // console.log(item);
    return item // forEach kabhi retirn nehi karta

})

// console.log(values);


//Example
// use filter ka besic

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]

// const newNums = myNums.filter( (num) => num > 4)

const newNums = myNums.filter( (num) => {
     return num > 4 // { } => use scope so return lekhna padega
    
})

console.log(newNums);

// use for each

const number  = [ 1, 2, 3, 4,5 ,6, 7 , 8,9 ,10] 
 const newNumber = []

 number.forEach( (nums) => {
    if (nums > 4) {
        newNumber.push(nums) // push a number and add a number
        
    }
 })
 console.log(newNumber);


 
 // filter use boks example

 const books = [
    {title : 'Book One' , genre : 'fiction', publish: 1981,
        edition: 2004 },
    {title : 'Book Two' , genre : 'Non-fiction', publish: 1992,
        edition: 2008 },
    {title : 'Book Three' , genre : 'history', publish: 1999,
        edition: 2007 },
    {title : 'Book four' , genre : 'Non-fiction', publish: 1989,
        edition: 2010 },
    {title : 'Book five' , genre : 'Science', publish: 2009,
        edition: 2014 },
    {title : 'Book Six' , genre : 'fiction', publish: 1987,
        edition: 2010 },
    {title : 'Book Seven' , genre : 'history', publish: 1986,
        edition: 1996 }
 ];

//  const userBook = books.filter((bk) => bk.genre === 'history')

 const userBook = books.filter((bk) => bk.publish >= 1995 && bk.genre === 'history')

 console.log(userBook);