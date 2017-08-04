// List of words
var wordList = ["stingray","crocodile","crikey","beautiful","terri","hunter","snake","shela","australia","venomous","poisonous","bite","sting", "gooday","size", "strike"];

// randomly selected word from the array to be guessed
var guessWord = (wordList[Math.floor(Math.random() * wordList.length)]);

// string variable of guessed letters, displayed in html
var guessed = document.querySelector(".guessed");
guessed.textContent = "";

// tracks how many wrong gueses left
var guessesRemaining = document.querySelector(".remaining");
guessesRemaining.textContent = 5;

// Flag to check if letter is already in the guessed list
var guessesFlag = 0;

// Flag to verify if character exists in word
var charExists = 0;


console.log(guessWord);

document.onkeyup=function(guess){

	guessKey = guess.key.toLowerCase();


	console.log(guessKey);

	// checks if key pressed is a letter
	if(guess.keyCode > 64 && guess.keyCode < 91){

		// loop through word to see if the letter guess is in the word and gets position and adds it to correct position in game or lowers guesses remaining
		for (var i = 0; i < guessWord.length; i++) {
			
			// if letter is in the word displays the letter in the correct position in the game
			if(guessWord[i] === guessKey){
				document.querySelectorAll(".character")[i].textContent = guessWord[i];
				charExists = 1;
			}
		}

		console.log(charExists);

		if(charExists == 0){
			guessesRemaining.textContent = guessesRemaining.textContent - 1;
		}else{
			charExists = 0;
		}


		// Checks to see if the letter guess is in the gussed list. if found switches the flag to 1
		
		for (var j = 0; j < guessed.textContent.length; j++) {
			if(guessed.textContent[j] == guessKey){
				guessesFlag = 1;
				break;
			}
		}

		// if flag is 0 adds letter to list otherwise resets for next guess
		if(guessesFlag == 0){
			guessed.textContent = guessed.textContent + " " + guessKey;
		}else{
			guessesFlag = 0;
		}
	}
}