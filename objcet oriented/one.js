// object literal

const user = {
    username: "Abhijit",
    loginCount : 8,
    signedIn : true,


    getUserDetail : function(){
        // console.log("Got user details from database");
        // console.log(`useername : ${this.username}`);
        console.log(this);
    }
      
}

console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);


// ## Construtor function (new key word) 
// const promiseOne = new Promise()
// const data = new date()

function User(useername, loginCount, isLoggedIn){
    this.useername = useername  //left side is variable ,right side jo pass ho raha he
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn


    this.greeting = function(){
        console.log(`Wellcome ${this.useername}`);
    }

    return this   // likhe na likhe not problem return keyword

} 

const userOne = new User("amiya", 18, true)
const userTwo = new User("gendu", 12, false)
console.log(userOne.constructor);
console.log(userTwo);
// constructor is a referrance in user
//# use new keyword create a empty object  this is called instance.
// stape one create object
// stape Two pass on jayega jo likhe ho
// stape Three this ke under add ho jayega