const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//Console log: the index of Titanic
console.log(favMovies.indexOf('Titanic'));

//use .sort
favMovies.sort();
console.log(favMovies);

//Use the method pop
favMovies.pop();
console.log(favMovies);

//push"Guardians of the Galaxy"
favMovies.push("guardians of the galaxy");
console.log(favMovies);

//Reverse the array
favMovies.reverse();
console.log(favMovies);

//Use the shiftmethod
favMovies.shift();
console.log(favMovies);

//unshift method
console.log(favMovies.unshift("Black Widow"));
console.log(favMovies);

//splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
let djangoIndex = favMovies.indexOf("Django Unchained");
favMovies.splice(djangoIndex,1,"Avatar");
console.log(favMovies);
//permanently alter our array

//slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
let middleIndex = favMovies.length / 2;
let lastHalf = favMovies.slice(middleIndex);
console.log(lastHalf);
//the method of programmatically determining 

//store the value of your slicein a variable, console.log it - Thought question: what is going on here?
let lastHalfArray = favMovies.slice(middleIndex);
console.log(lastHalfArray);

//console.log your final results
console.log(favMovies);

//console.log the index of "Fast and Furious"
console.log (favMovies.indexOf("Fast and Furious"));

//Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?
//When you use const to declare a variable, it means that the variable's reference (memory address) cannot be changed. However, for arrays and objects, the contents (elements or properties) of the array or object can still be modified.
//If you anticipate that you might need to change the reference to the array or update its content, then using let gives you the flexibility to do so.

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
