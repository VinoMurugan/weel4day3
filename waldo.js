let whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];

//Remove Eggbert
let eggbertIndex = whereIsWaldo.indexOf("Eggbert");
if (eggbertIndex !== -1) {
whereIsWaldo.splice(eggbertIndex,1);
}

//Change "Neff" to "No One"
let neffIndex = whereIsWaldo[2].indexOf("Neff");
if (neffIndex !== -1) {
  whereIsWaldo[2].splice(neffIndex, 1, "No One");
}

//Access and console.log "Waldo"
const waldo = whereIsWaldo[2][1][1];
console.log(waldo);
