const accountId = 12343;
let accountEmail = "abhijit22@gmail.com";
var accountPass = "1234";
accountCity = "bhubaneswar"

// accountId =2  //not allow const mean not change
accountEmail = "ab@.com"
accountPass = "22121"
accountCity = "jajpur"

console.log( accountId);
/*
prefer to not use var
becuse of issu in block scope and functional scope 

*/

console.table([accountEmail, accountPass, accountCity])