var Letter = require('./letter.js')

var Word = function(word) {
	this.letters = word
	var hiddenWord = []
	var correctCount = 0
	for (var i = 0; i < this.letters.length; i++) {
			hiddenWord[i] = new Letter(this.letters[i])
		}
// A function that returns a string representing the word. 
// This should call the function on each letter object 
//(the first function defined in Letter.js) 
// that displays the character or an underscore and 
//concatenate those together.
	this.newWord = function(callback) {
		var correctCount = 0
		var displayBoolean = function(result) {
			booleanResult = result
			if (booleanResult != '_') {
				correctCount++
			}
			process.stdout.write(result + " ")
		}
		for (var i = 0; i < this.letters.length; i++) {
			hiddenWord[i].wordGuess(displayBoolean)
		}
		callback(correctCount)
	}

	this.wordCount = function() {
		return this.letters.length;
	}

// A function that takes a character as an argument and calls the guess function on each 
// letter object (the second function defined in Letter.js)
	this.characterGuessed = function(guess, callback) {
		for (var i = 0; i < this.letters.length; i++) {
			hiddenWord[i].compareGuess(hiddenWord[i].letter, guess)
		}
	}


}


module.exports = Word