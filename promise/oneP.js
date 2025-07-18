// Promise 1
const PromiseOne = new Promise(function(resolve , reject) {
    //Do an async task
    //DB calls, Cryptography,network

     setTimeout(function(){
        console.log('Async task is complete');
        resolve()
     },1000)
    })


    PromiseOne.then(function(){
        console.log("promise consumed");
    })

// second type

    new Promise(function(resolve , reject) {
        setTimeout(function(){
            console.log("Async task 2");
            resolve()
        } , 1000)
    }).then(function(){
        console.log("Async 2 resolved");
    })

    //3rd promise

    const promiseThree = new Promise(function(resolve, reject){
        setTimeout( function(){
            resolve({username : "abhi@13" , email: "abhi@gmail.com"})
        },1000)
    })

    promiseThree.then(function(user){
       console.log(user);
    })

    //4th promise

    const promiseFour = new Promise(function(resolve , reject){
       setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username : "hitesh" , password : "123@ab"})
        }else{
            reject('ERROR Something wents wrong')
        }
       },1000)
    })

    promiseFour.then( (user) => {
         console.log(user);
         return user.username
    }).then( (username) => {
         console.log(username);
    }).catch(function(err){
       console.log(err);
    }).finally( () => {
        console.log("The promise is either resolved or rejected");
    })


    // promise 5

    const promiseFive = new Promise(function(resolve , reject) {
        setTimeout(function(){
            let error = true
            if(!error){
                 resolve({username : "Abhji@12" , password : "1234"})
            }else{
                reject('error JS wents wrong')
            }
        } ,1000)
    })

      async function consumePromiseFive () {
        try {
            const reponse = await promiseFive
        console.log(reponse);
        } catch (error) {
            console.log(error);
        }
      }

      consumePromiseFive()

      
      // Example

    //   async function getAllUsers (){
    //      try {
    //      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    //      const data = await response.json()
    //      console.log(data);
    //      } catch (error) {
    //         console.log("E: " , error);
    //      }
    //   }
    //   getAllUsers()


    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (reponse) => {
        return reponse.json()
    })
    .then( (data) => {
        console.log(data);
    })
    .catch( (error) => {
        console.log(error);
    })