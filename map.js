const myNumber = [ 1, 2, 3, 4, 5, 6, 7,8 ,9 ,10] 

//  const newNums = myNumber.map((num) => num + 10)
//  const newNums = myNumber.map((num) => { return num + 10})
 //open scope ( {}) use return keyword
//  console.log(newNums);

 // chening method

 const newNums = myNumber
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )    // uski value 1 nehi hoga upar value ke barbar hoga
                .filter( (num) => num >= 40)

 console.log(newNums); 

 