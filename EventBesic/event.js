// document.getElementById('spiderman').onclick = function() {
//     alert('spiderman clicked')
// }  // 

// attachEvent()
// jQuery - onEventListner
// best approch
//event boobling
// document.getElementById('spiderman').addEventListener('click' , function(e){
//   console.log(e);
// }, false)

//Entervew releted research
//type, timestamp, defultPrevented, 
//target, toElement, srcElement, currrntTargrt
// clientX, clientY, screenX, screenY
//altkey , ctrlkey , shiftkey, keyCode


// event propergation  // boobling nichhese upar
// captuaring upar se nichee

// document.getElementById('images').addEventListener('click' , function(e){
//     console.log("Clicked inside the UL");
//   } , false)

//   document.getElementById('spiderman').addEventListener('click' , function(e){
//     console.log("spiderman clicked");
//     e.stopPropagation()
//   } , false) 

// document.getElementById('google').addEventListener('click' , function(e) {
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("google Clicked");
    
// } , false)


//Example 1 click the image and the image is invisible

//Event spileOver
document.querySelector('#images').addEventListener('click' , function(e) {
console.log(e.target.tagName); // target laganese img ka name show hota he console me,
// parentNode show console li

if (e.target.tagName === 'IMG') {
    console.log(e.target.id);
    let removeIt = e.target.parentNode
removeIt.remove() //first process to remove
}



//   removeIt.parentNode.removeChild(removeIt) //second process
} , false)