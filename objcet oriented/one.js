// object literal

const user = {
    username: "Abhijit",
    loginCount : 8,
    signedIn : true,


    getUserDetail : function(){
        // console.log("Got user details from database");
        console.log(`useername : ${this.username}`);
    }

}
 
console.log(user.username);
console.log(user.getUserDetail());