//  switch (key) {
//     case value:
        
//         break;
 
//     default:
//         break;
//  }


// switch case 
//example one
const month = 3

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("April");
        break; // brrek nei hota to true ke bad or execute nrhi karta

    default:
        console.log("defult case match");
        break;
}

//Example two

const weak = "sun"

switch (weak) {
    case "mon":
        console.log("monday");
        break;
    case "tues":
        console.log("tuesday");
        break;
    case "thus":
        console.log("thusday");
        break;
    case "sun":
        console.log("sunday");
        break;

    default:
        console.log("defult case not match ");
        break;
}
