//CODECADEMY JAVASCRIPT PRACTICE - Rock, Paper, or Scissors Project 

// STARTING CODEBASE

// console.log('Nick');

// Task 1 - The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
// Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.

// Task 2 - Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, 
// begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.

// Task 3 - When getting the user’s choice, you should also check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
// Inside getUserChoice(), write an if/else statement that makes sure the userInput is either 'rock', 'paper', or 'scissors'. 
// If it does, then return the userInput. If not, use console.log to print an error message to the console.

// Task 4 - Test the function by calling it with valid and invalid input, and printing the results to the console.

// Task 5 - Create a new function named getComputerChoice with no parameters. 
// Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2. 
// Then, depending on the number, return either 'rock', 'paper', or 'scissors'.

// Task 6 - Test the function by calling it multiple times and printing the results to the console.

// Task 7 - Create a function named determineWinner that takes two parameters named userChoice and computerChoice. 
// This function will compare the two choices played and then return if the human player won, lost, or tied.

// Task 8 - If the game is not a tie, you’ll need to determine a winner.
// Begin by writing an if statement that checks if the userChoice is 'rock'. Inside the if statement’s block, write another if/else statement. 
// The inner if/else should check if the computerChoice is 'paper'. 
// If so, return a message that the computer won. If not, return a message that the user won.

// Task 9 - Next, write another if statement for if the userChoice is 'paper'.
// Inside this if statement, the computerChoice must be either 'scissors' or 'rock'. Write logic that will return a winner.

// Task 10 - Next, write yet another if statement for if the userChoice is 'scissors'
// Inside of this if statement, the computerChoice must either be 'rock' or 'paper'. 
// Write logic that will return a winner.

// Task 11 - Don’t forget to test your function!
// Check off this task when you’ve finished testing.

// Task 12 - Everything is set up. Now you need to start the game and log the results.
// Create a function named playGame.
// Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), 
// passing in either 'rock', 'paper', or 'scissors' as an argument.
// Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice().
// Under both of these variables, use console.log to print them to the console.

// Task 13 - Finally, let’s determine who won.
// Inside the playGame() function, call the determineWinner() function. 
// Pass in the userChoice and computerChoice variables as its parameters. 
// Make sure to put this function call inside of a console.log() statement so you can see the result.
// Then, to start the game, call the playGame() function on the last line of your program.

// Task 14 - Make this game better by adding a secret cheat code. 
// If a user types 'bomb' as their choice, then make sure they win, no matter what.




const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    }
    else {
        console.log('Error, please type: rock, paper or scissors.'); 
    }
}


// Testing gerUserChoice function - valid choice
// console.log(getUserChoice('paper'));

// Testing getUserChoice function - invalid choice
// console.log(getUserChoice('jellyfish'));



const getComputerChoice = () => {
    
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0: 
            return 'rock';
            break;
        case 1: 
            return 'paper';
            break;
        case 2: 
            return 'scissors';
            break;
    }
};

// Testing getComputerChoice function 
// console.log('Computer');
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());


// Determine Winner function
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return '***** The Game is a Tie! *****';
    }

    if (userChoice === 'rock') {
        if(computerChoice === 'paper') {
            return '***** Snap, computer won! *****';
        }
        else {
            return '***** Congratulations, you won! *****';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return '***** Congratulations, you won! *****';
        }
        else {
            return '***** Snap, computer won! *****';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return '***** Snap, computer won! *****';
        }
        else {
            return '***** Congratulations, you won! *****';
        }
    }

    if (userChoice === 'bomb') {
        return '***** Congratulations, you won! *****';
    }
}

// Testing Determine Winner Function
// console.log(determineWinner('rock', 'scissors'));
// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('scissors', 'scissors'));



// playGame function
const playGame = () => {
    
    // Declare var userChoice & computerChoice - set equal to call of getUserChoice & getComputerChoice functions
    const userChoice = getUserChoice('Bomb');
    const computerChoice = getComputerChoice();
    
    // Print to console userChoice & computerChoice
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);

    // Call determineWinner function to initiate game
    console.log(determineWinner(userChoice, computerChoice));
};

// Call playGame function
playGame();



