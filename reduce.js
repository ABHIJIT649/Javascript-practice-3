const myNums = [1, 2, 3, 4]

 const myTotal = myNums.reduce ( function (acc , curval) {

    console.log(`acc ${acc} and currval ${curval}`);
    return acc + curval
    
 }, 0)
 console.log(myTotal);

 // write arrow function 

 const num = [1, 2, 3, 4 ,5]

 const mytotalVal = num.reduce( (acc, cur) => acc + cur ,0)

 console.log(mytotalVal);

 // Example 

 const shopingcart = [
    {
        itemName : "js",
        price : 2999
    },
    {
        itemName : "python",
        price : 5999
    },
    {
        itemName : "data Science",
        price : 12999
    },
    {
        itemName : "jsva",
        price : 3999
    },
 ]

 const priceToPay = shopingcart.reduce( (acc, item) => acc + item.price ,0)

 console.log(priceToPay);