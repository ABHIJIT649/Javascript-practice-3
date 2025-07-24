// let myName = "Abhijit      "
// let mychnl = "chaiCode      "

// console.log(myName.truelength);


let myHero = ["thor","spiderman"]


let heroPower = {
    thor : "hammer", 
    spiderman : "sling",

    getSpiderPower : function(){
        // console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abhijit = function(){
    // console.log(`abhijit is present all object`);
}


Array.prototype.heyAbhi = function(){
    // console.log(`abhi says hello`);
}

// heroPower.abhijit()

myHero.abhijit()
myHero.heyAbhi()
// heroPower.heyAbhi()


// inheritance


const user = {
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASuppot = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    // __proto__:TeachingSupport //old approch
}

// Teacher.__proto__ = user

// morden syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anaotheruserName = "chaiorcode      "

String.prototype.tureLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);

}

anaotheruserName.tureLength()

"Abhijit".tureLength()
"icecream".tureLength()
