// Letter.js
// 18/May/2019

var Letter = function () {
    this.leter   = "";      // A string value to store the underlying character for the letter
    this.guessed = false;   // A boolean value that stores whether that letter has been guessed yet

    // A function that returns the underlying character if the letter has been guessed
    // or a placeholder (like an underscore) if the letter has not been guessed
    this.func1   = function(){
        if (this.guessed === true) {
            console.log(this.leter);
        } else {
            console.log("_");
        }
    };

    // A function that takes a character as an argument
    // and checks it against the underlying character,
    // updating the stored boolean value to true if it was guessed correctly
    this.guess   = function(car){
        if (car === this.leter) {
            this.guessed = true;
        };
    };
};

module.exports = Letter;