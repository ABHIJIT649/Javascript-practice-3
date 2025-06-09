function calculateCartprice ( ...num1){ //use [...] the output is [200,400,500]
return num1
}

console.log(calculateCartprice(200, 400, 500)); //bahat sare value he but out put  only one(200)


// how to object pass in function 

const user = {
    username:"Abhijit",
    price:199
}

function handleObject(anyobject){
    console.log(`The name is ${anyobject.username} and  price is ${anyobject.price}`);
}

handleObject(user)

//how object pass in functuion call

handleObject({
    username:"Amiya",
    price:299
})

//how array pass in functuion 

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

//how array pass in functuion call
console.log(returnSecondValue([400, 7800, 9000,67676]));