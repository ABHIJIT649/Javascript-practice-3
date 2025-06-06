//object single turn or constracter

// const tinderUser = new object() //single turn empty user he 

// const newTinder = {} //non - single turn user {empty}


//  newTinder.id = "123dr"
//  newTinder.name="thomson"
//  newTinder.isLoggedIn = false

//  console.log(newTinder)

const regularUser = {
    email : "some@gmail.com",
    fullName :{
        userFullName:{
            firstName:"hitesh",
            lastName:"xhouduri"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

// "Asign "combine to object
const obj1 ={
    1:"a",
    2:"b",
    3:"c"
}
const obj2 ={
    4:"k",
    5:"j",
    6:"l"
}

// const obj3 = Object.assign({}, obj1 , obj2) //small uses
// console.log(obj3)

const obj3 = {...obj1, ...obj2}  //new process easy to use

// console.log(obj3)


const users = [
    {
        id:1,
        email:"amma@gmail.ocm"
    },
    {
        id:2,
        email:"amjfshfjsh@gmail.ocm"
    },
    {
        id:3,
        email:"tytma@gmail.ocm"
    }


]

const newuser= users[0].email
console.log(newuser)

// users.id
// console.log(users)


