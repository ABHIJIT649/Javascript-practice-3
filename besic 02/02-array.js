const marvel_heros = ["thoe","ironman","spiderman"]

const dc_heros = ["batman","flash","superman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

const allHeros= marvel_heros.concat(dc_heros)  //c0ncat method
console.log(allHeros)

//spred operator

const allNew_Heros = [...marvel_heros,...dc_heros]; //spread method
console.log(allNew_Heros)


const anotherArray = [1, 2, 3, [3, 4, 5],7, [6,7, [4,5]]]

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);


 console.log(Array.isArray("abhijit"));
 console.log(Array.from("abhijit")); //string to all indivitual letter convert  to a single array

 console.log(Array.from({name:"hitesh"})); //imp intervew empty array

//Example
 let score1 = 100;
 let score2 = 200;
 let score3 = 300;

console.log(Array.of(score1, score2, score3));




