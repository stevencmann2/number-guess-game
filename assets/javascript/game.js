//Here is a list of the constants that will need to be added from 0//
let points= 0;
let attempts = 0;

// Here are the references to the text in the HTML dcoument //

const directionsText = document.getElementById("directionstext");
const userChoiceText = document.getElementById("pastguess");
const pointsText = document.getElementById("pointstext");
const AttemptsText = document.getElementById("attemptstext");

/*
First, task is to generate inputs to be compared later 
*/
// generates a number betwee 0-9//

const randomNumber = Math.floor(Math.random() * 10);

//establish a user guess by keystroke
document.onkeyup = function(event) {
    const userGuess = event.key;
    

    //this will determine the result of the game thruogh conditionals//
    if ((userGuess === randomNumber)) {
        points++;
    }
        else {
            attempts++;
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


