// {} =>  is called scope 

//nested scope

function one(){
    const username = "Abhijit"

    function two(){ //child function parrent variable ko acess karte he
        const website = "you tube"
        console.log(username);
    }
    // console.log(website);

    // two()

}

// one()

if(true){
    const username = "Subham"
    if(username === "Subham"){
        const website = "facebook"
        console.log(username + website);
    }
    // console.log(website); ///error
}
// console.log(username); //error becuse bahar he


//******************** intresting *************** */

//one
function addOne(num){
  return num +1
}

console.log(addOne(5));



const addTwo = function(num){
    return num +2
    
}

console.log(addTwo(5));


//two


// addthree(5) //isme error nehi ayega 
// function addthree(num){
//     return num +1
//   }
  
  

//   addfour(5) //isme error ayega diclaration se pehle function call
//   const addfour = function(num){
//       return num +2
      
//   }
  
  