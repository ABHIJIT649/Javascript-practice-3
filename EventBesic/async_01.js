//formula one
setTimeout(function(){
    console.log("Abhijit");
} , 2000 )

//second formula refarence kyu ki handler
const sayAbhi = function(){
    console.log("Abhijit");
}
setTimeout(sayAbhi, 5000)

// 2 sec bad change hoga H1
const changeText = function(){
    document.querySelector('h1').
    innerHTML = "Hello Abhijit"
}
const changeMe = setTimeout(changeText, 2000)

document.querySelector('#stope').addEventListener('click' , 
    function(){
        clearTimeout(changeMe)
        console.log("stoped");
    }
)