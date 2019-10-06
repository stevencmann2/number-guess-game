
// This will prompt the user to pick an integer between 1 and the limit set by maxNumber
// It will also track the number of attempts made by the user
const maxNumber = 10;
const attempts = 0;


// generates a random number between 1 and 10 (maxNumber) as determined by the computer
const computerNumber = Math.floor(Math.random () * maxNumber + 1);

//Asks the user for input REMOVE IN A MINUTE

const initialQuestion = prompt("To play, pick a number between 1 and " + maxNumber);

//compares the result of the computer and the user
 while (initialQuestion != computerNumber) {
    const initialQuestion = prompt("To play, pick a number between 1 and " + maxNumber);
    attempts += 1;

    if (attempts > Maxtries) {
        break
        document.write("That's all Folks! It looks like you have exceeded the max amount of attempts :( Let's Try Again")
    }
 }






document.onkeyup = function() {
    const userguess= 
}



const number = 




//This will Count the Guesses//
// Correct Guesses//