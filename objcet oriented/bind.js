// class React {
//     constructor() {
//         this.library = "react"
//         this.server = "https://localhost:300"


//         //requirement

//         document.querySelector('button')
//         .addEventListener('click', this.handleClick
//             .bind(this)
//         )
//     }

//     handleClick(){
//         console.log("Button clicked");
//         console.log(this.server);
//     }
// }

// const app = new React()



//Example

const persion = { name: "Abhi"}

function greet(){
    console.log("hello, " + this.name);
}

const bindGreet = greet.bind(persion)
bindGreet()

// . Bind greet() to another object

const student1 = {
    name: "rohit",
    greet : function () {
    console.log("hello ,"  + this.name);
   }
};

const student2 = {name: "Vira"}

const bindAnotherObj = student1.greet.bind(student2);
bindAnotherObj()


