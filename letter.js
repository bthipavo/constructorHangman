// Contains a constructor, Letter. This constructor should be 
// able to either display an underlying character or a blank 
// placeholder (such as an underscore), depending on whether
// or not the user has guessed the letter.  


var Letter = function(letter, guess) {
// A string value to store the underlying character for the letter
	this.letter = letter

// A boolean value that stores whether that letter has been guessed yet
	this.guess = 0

	// this.letterGuess = letterGuess
	
// A function that returns the underlying character 
// if the letter has been guessed, or a placeholder 
// (like an underscore) if the letter has not been guessed

	this.wordGuess = function(callback) {
		// console.log("guess " + this.guess)
		if (this.guess) {
			callback(this.letter)
		} else {
			callback('_')
		}
	}

// A function that takes a character as an argument and checks 
// it against the underlying character, updating the stored
 // boolean value to true if it was guessed correctly

	this.compareGuess = function(letterGuess, letter) {
		if (this.guess === 1) {
			this.guess = 1
		} else {
			if (letterGuess === letter) {
				this.guess = 1
			} else {
				this.guess = 0
			}
		}
		// console.log(letterGuess)
		// console.log(letter)
		// console.log(this.guess)

	}
}

module.exports = Letter