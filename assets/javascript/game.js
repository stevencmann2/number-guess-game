/*
First, task is to generate inputs to be compared later 
*/

// math.ceil always rounds a number up to the laregest whole number/integer //

const randomNumber = Math.ceil(Math.random() * 1);

// establish a conter with number assigned to the value
let attemptCounter = 3;

// establish a for loop, where we will subtract the number of attempts from the counter

for (attemptCounter; attemptCounter > 0; attemptCounter--) {

    // parseInt takes a string and returns and integer in this loop
    let userGuess = parseInt(prompt("Can you guess the number I am thinking of ? Hint: The number is between 1-10"))

    //MAY NEED TO ADD CODE MISSING ABOVE

    if(randomNumber === userGuess){
       
        console.log("you won")


    }



}
