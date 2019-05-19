// index.js
// 18/May/2019

//======================================================= Variables
var Word       = require("./Word.js");
var inquirer   = require("inquirer");
var fs         = require("fs");
var qMain      = [{                              // Questions for Main Section
    type:    "list",
    message: "What do you want to do?",
    choices: ["Play the game", "Exit"],
    name:    "action"
}];
var arrWords   = ["EARTH", "GALAXY", "CELESTIAL", "MOON", "STAR", "EQUATOR", "SPACE", "PLANET", "COSMOS", "ASTEROID", "AXIAL", "ASTRONOMY", "ASTRONAUT", "COMET", "EQUINOX", "ECLIPSE", "GEOSTATIONARY", "GRAVITATION", "HYPERNOVA", "METEORITE", "NEBULA", "ORBIT", "SATELLITE", "SOLAR", "UNIVERSE", "WAVELENGTH"];

//======================================================= Functions

// - - - - - - - - - - - - - - General functions calls
function actionPlay() {
    var word2Guess = arrWords[Math.floor(Math.random()*arrWords.length)];
    console.log("word:", word2Guess);
    // Randomly selects a word and uses the `Word` constructor to store it
    var word = new Word(word2Guess);
};

function main(){
    inquirer
    .prompt (qMain)
    .then (
        function (iResp) {
            if (iResp.action === "Play the game") { actionPlay() };
            if (iResp.action === "Exit"         ) {  };
        }
    );
};


//======================================================= Execution
main();
