// establuish variables //
const correct = 0;
const incorrect = 0;
    

// get user input using key press //
document.onkeyup = function (event) {
    //determines which key ewas pressed//
    const userGuess = event.key;
    console.log()

        

    // array for computer choices

   
    //randomly chooses a choice from the options array //

    const computerDecision = [Math.floor.random() * 10 + 1];
    





    //compares the useer and computer guesses and determines the results with a conditional //

    if ((userGuess === computerDecision)) {
        //correct is a const that is needed to be made on the page//
        correct++ 
    } else {
        incorrect++
    }




}