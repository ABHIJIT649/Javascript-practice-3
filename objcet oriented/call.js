function SetUsername (username){
    //complex calculation complex DB calls
    this.username = username
    console.log("called");
}

function createUser (username, email, password){
    // SetUsername(username) // referrance not call

    SetUsername.call( this, username)  //this use  context pass
 
    
    this.email = email
    this.password = password

}

const chai = new createUser("chai", "chai@gmail.com", "1234")
console.log(chai);