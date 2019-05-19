// Word.js
// 18/May/2019

//======================================================= Variables
var Letter = require("./Letter.js");

var Word = function (word2Guess){
    this.arr = [];   // An array of `new` Letter objects representing the letters of the underlying word
    this.max = word2Guess.length;

    // A function that returns a string representing the word
    this.func3 = function(){
        for (ct = 0; ct < this.max; ct++){   // Length of the word
            this.arr [ct] = new Letter();
        };
    };

    // A function that takes a character as an argument
    // and calls the guess function on each letter object
    // (the second function defined in `Letter.js`)
    this.func4 = function(){};
};

module.exports = Word;