// Creates object with 
function Gameinfo(wordList, guesses) {
	this.wordList = wordList;
	this.word = "";
	this.characters = 0;
	this.Win = 0;
	this.Loose = 0;
	this.guessedLetters = "";
	this.guessesLeft = 5;
	this.guessedKey = "";
};


// // 
//  function startgame(){

var Game = new Gameinfo(
	["stingray","crocodile","crikey","beautiful","terri","hunter","snake","shela","australia","venomous","poisonous","bite","sting", "gooday","size", "strike"],
	5
);

document.querySelector(".remaining").textContent = 5;

Game.word = Game.wordList[Math.floor(Math.random() * Game.wordList.length)];
Game.characters = Game.word.length;

// // 	return
//  }

//  // calls the start game function
// startgame();

// string variable of guessed letters, displayed in html
var guessed = document.querySelector(".guessed");
guessed.textContent = Game.guessedLetters;

// tracks how many wrong guesses left
var guessesRemaining = document.querySelector(".remaining");
guessesRemaining.textContent = Game.guessesLeft;

// Flag to check if letter is already in the guessed list
var guessesFlag = 0;

// Flag to verify if character exists in word
var charExists = 0;

console.log(Game.word);

document.onkeyup=function(guess){

	Game.guessedKey = guess.key.toLowerCase();


	// checks if key pressed is a letter
	if(guess.keyCode > 64 && guess.keyCode < 91){

		// loop through word to see if the letter guess is in the word and gets position and adds it to correct position in game or lowers guesses remaining
		for (var i = 0; i < Game.characters; i++) {
			
			// if letter is in the word display the letter in the correct position in the game
			if(Game.word[i] == Game.guessedKey){
				
				document.querySelectorAll(".character")[i].textContent = Game.word[i];
				guessesFlag = 1;

			}
		}

		if(guessesFlag == 0){
			Game.guessesLeft--;
		}else{
			guessesFlag = 0;
		}

		guessesRemaining.textContent = Game.guessesLeft;

		// Checks to see if the letter guess is in the guessed list. if found switches the flag to 1
		for (var i = 0; i < Game.guessedLetters.length; i++) {

			if(Game.guessedLetters[i] == Game.guessedKey){
				charExists = 1
				break;
			}
		}

		if(charExists == 0){
			Game.guessedLetters = Game.guessedLetters + Game.guessedKey + " ";
		}else{
			charExists = 0;
		}

		guessed.textContent = Game.guessedLetters;

	}else{
		alert("Invalid key pressed");
	}
}