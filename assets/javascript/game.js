//Here is a list of the variables that will change as the game progresses//
let points = 0;
let attempts = 0;
let attemptsLeft = 5;
let numbersGuessedArray = [];

// Here are the references to the text in the HTML dcoument //

const directionsText = document.getElementById("directionstext");
const userPassGuessText = document.getElementById("pastguesstext");
const pointsText = document.getElementById("pointstext");
const attemptsText = document.getElementById("attemptstext");
const attemptsLeftText = document.getElementById("attemptslefttext")

/*
First, task is to generate inputs to be compared later ;
the function that generates a number between 0-9;
let randomNumber = Math.floor(Math.random() * 10);
*/

//establishes a user guess by keystroke
document.onkeyup = function (event) {

    let userGuess = event.key;
    //because the random fucntion is in the loop, it will constantly change on the kep press//
    let randomNumber = Math.floor(Math.random() * 10);
    let userInt = Number.parseInt(userGuess);

    //this will determine the result of the game thruogh conditionals//
    //for every correct guess//
    if ((userInt === randomNumber)) {
        points++;
        pointsText.textContent = "Points: " + points;

        //for every incorrect guess//
    } else {
        attempts++;
        attemptsLeft--;
        attemptsLeftText.textContent = "Attempts Left: " + attemptsLeft;
        attemptsText.textContent = "Attempts: " + attempts;
        numbersGuessedArray.push(userInt);
        userPassGuessText.textContent = "Guesses so Far: " + numbersGuessedArray;

    }
    // this will trigger the end of the game if you exceed attempts or get to 3 total points
    if ((attemptsLeft === 0)) {
        //this will cause the page to reload
        confirm("That's All Folks! Better Luck Next Time, Let's Try Again!")
        location.reload();

    }
    if ((points == 3)) {
        //This will cause the page to reload
        confirm("Winner Winner Chicken Dinner! Let's Play Again!")

        location.reload()

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