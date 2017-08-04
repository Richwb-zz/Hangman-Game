// List of words
var wordList = ["stingray","crocodile","crikey","beautiful","terri","hunter","snake","shela","australia","venomous","poisonous","bite","sting", "gooday","size", "strike"];

// randomly selected word from the array to be guessed
var guessWord = (wordList[Math.floor(Math.random() * wordList.length)]);

// string variable of guessed letters, displayed in html
var guessed = document.querySelector(".guessed")
guessed.textContent = "";

// Flag to check if letter is already in the guessed list
var flag = 0;

console.log(guessWord);

document.onkeyup=function(guess){

	
	// loop through word to see if the letter guess is in the word
	for (var i = 0; i < guessWord.length; i++) {
		if(guessWord[i] === guess.key){
			
			// if letter is in the word displays the letter in the correct position in the game
			document.querySelectorAll(".character")[i].textContent = guessWord[i];
		}
	}

	// Checks to see if the letter guess is in the gussed list. if found switches the flag to 1
	
		for (var j = 0; j < guessed.textContent.length; j++) {
			if(guessed.textContent[j] == guess.key){
				flag = 1;
			}
		}

	// if flag is 0 adds letter to list otherwise resets for next guess
	if(flag == 0){
		guessed.textContent = guessed.textContent + " " + guess.key;
	}else{
		flag = 0;
	}
}