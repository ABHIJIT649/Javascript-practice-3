function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function createUser(username , score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
 
const chai = new createUser("chai" , 25)
const tea  = new createUser("tea", 250)

chai.printMe() 
tea.printMe()

// * here's what happpen behind the scenes when the new keyword is used:

/* a new object is created : The new keyword initiates the creation
of a new JavaScript object. */

/* A prototype is linked : The newly created get linked to the 
prototype property of the constructor function.  */
