#! /usr/bin/env node

import inquirer from "inquirer"

// 1. computer will generate a rendom - done.
// 2. user input for guessing number - done.
// 3. compare user input with computer generated number and show result - done.



const randomNumber = Math.floor(Math.random() * 4 + 1);

const answer = await inquirer.prompt([
{
name: "userGuessedNumber",
type: "number",
message: "Please Guess A Number Between 1-5: ",

}, 
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congtratulation! You Guessed Right Number")
}
else if (answer.userGuessedNumber > 5){
    console.log("Please Select correct number between 1 to 5")
}
else if(answer.userGuessedNumber != randomNumber) {
    console.log("You Guessed Wrong Number");
    console.log("Try Again")
}

