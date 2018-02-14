// Contains a constructor, Letter. This constructor should be 
// able to either display an underlying character or a blank 
// placeholder (such as an underscore), depending on whether
// or not the user has guessed the letter. 

var Letter = function(letterGuess, letter, guess) {
// A string value to store the underlying character for the letter
	this.letter = letter

// A boolean value that stores whether that letter has been guessed yet
	this.guess = guess

	this.letterGuess = letterGuess
	
// A function that returns the underlying character 
// if the letter has been guessed, or a placeholder 
// (like an underscore) if the letter has not been guessed

	this.wordGuess = function() {
		if (this.guess) {
			return letter
		} else {
			return '_'
		}
	}

// A function that takes a character as an argument and checks 
// it against the underlying character, updating the stored
 // boolean value to true if it was guessed correctly

	this.compareGuess = function(letterGuess, letter, guess) {
		if (this.letterGuess === this.letter) {
			this.guess = 1
		} else {
			this.guess = 0
		}
	}
}

module.exports = Letter