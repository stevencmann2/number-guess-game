//Here is a list of the constants that will need to be added from 0//
let points = 0;
let attempts = 0;
let attemptsLeft = 5

// Here are the references to the text in the HTML dcoument //

const directionsText = document.getElementById("directionstext");
const userChoiceText = document.getElementById("pastguesstext");
const pointsText = document.getElementById("pointstext");
const attemptsText = document.getElementById("attemptstext");
const attemptsLeftText = document.getElementById("attemptslefttext")

/*
First, task is to generate inputs to be compared later 
*/
// generates a number betwee 0-9//

const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber)

//establish a user guess by keystroke
document.onkeyup = function (event) {
    let userGuess = event.key;
    let userInt=Number.parseInt(userGuess);

    console.log(userGuess)
    console.log(typeof userGuess)
    console.log(typeof userInt)
    


    //this will determine the result of the game thruogh conditionals//
    if ((userInt === randomNumber)) {
        points++;
        pointsText.textContent = "Points: " + points;

    } else {
        attempts++;
        attemptsLeft--;
        attemptsLeftText.textContent = "Attempts Left:" + attemptsLeft;
        attemptsText.textContent = "Attempts :" + attempts;

    }
    // this will trigger the end of the game if you exceed attempts or get too many points

    if ((attemptsLeft === 0)) {
        
        alert("That's All Folks! Better Luck Next Time");
    }

    if ((points == 3)) {
        alert("Winnner Winner Chicken Dinner!");
    }


}














//document.getElementById("pastguess");

//document.addEventListener('keyup', logKey);



// establish a conter with number assigned to the value
// let attemptCounter = 3;

// console.log(attemptCounter)

// establish a for loop, where we will subtract the number of attempts from the counter

// for (attemptCounter; attemptCounter > 0; attemptCounter--) {

//I need to make an event happen when the user presses a key
//document.onkeyup = function (event) {
// const userGuess= event.key;

//here starts the conditionals
// if(userGuess === randomNumber){

//   }
// }


//MAY NEED TO ADD CODE MISSING ABOVE

// if(randomNumber === userGuess){




// }