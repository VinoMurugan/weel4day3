const zoya = ["zoya" , "dog" , 2 , "india"]
const bunny = ["bunny" , "rabbit" , 4 , "newyork"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const plantee = ["plantee" , "plant" , 140 , "troy"]
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//plantee birthday
plantee[2]++;

//change wolfy hometown
wolfy.splice(3,1,"Gowtham City");

//D'Art second hometown
dart.push("Hawkins");

// Porgee's decision to rename Wolfy
const wolfyIndex = wolfy.indexOf("Wolfy");
if (wolfyIndex !== -1) {
  wolfy[wolfyIndex] = "Gameboy";
}

console.log(plantee);
console.log(wolfy);
console.log(dart);