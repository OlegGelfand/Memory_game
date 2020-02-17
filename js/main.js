main.js

const cards = ["queen", "queen","king", "king"];
const cardsInPlay = [];
const cardOne = 0;
const cardTwo = 2;
cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');


console.log("user flipped queen")

console.log("user flipped king")

if (cardsInPlay.length === 2) {console.log(2)} 
 if(cardsInPlay[1] === cardsInPlay[2]){alert("you found a match!")} else{alert("sorry try again")};