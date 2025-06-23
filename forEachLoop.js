// for each loop //heigher order function

const coading = ["js" , "ruby", "java", "python", "cpp"]

// coading.forEach( function (item) {

//     console.log(item);
// })


// second method
//  arrow function
// coading.forEach( ( val) => {
//     console.log(val);
// } )

//third method

// function printMe(item){
//     console.log(item);
// }

// coading.forEach(printMe )


//method 4

// coading.forEach( (item , index, array) => {

//      console.log(item, index, array);
// })

//// iske upar ittirataiton
const myCoading = [
    {
        languageName: "javaScript",
        languageFileNAme: "js"
    },
    {
        languageName: "java",
        languageFileNAme: "java"
    },
    {
        languageName: "python",
        languageFileNAme: "jy"
    }
    
    ]
    
    myCoading.forEach( (item) => {
    
        console.log(item.languageName);
    })