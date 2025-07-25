class User {
    constructor(username){
        this.username = username
    }
    logMe (){
        console.log(`user name is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username , email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse (){
        console.log(`A new course added by ${this.username}`);
    }
}

const chai = new Teacher("chai" ,"chai@gmail.com","123")

chai.addCourse()

const tea = new User("masalachai")

tea.logMe()

console.log(chai instanceof User);