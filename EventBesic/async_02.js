
//click start and the setinterval is start
document.querySelector('#start').addEventListener('click',function(){
    const sayDate = function(str){
        console.log(str , Date.now());
    }
    const intervalId = setInterval(sayDate,1000,"hi")


//click stope and the setinterval is stope
    document.querySelector('#stope').addEventListener('click',function(){
        clearInterval(intervalId)
    })
})




