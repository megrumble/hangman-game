var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guess = []; //guessed letter
var correct; //correct guess
var lives; //lives
var counter = 6; // count correct guesses
var word = "";
var len = "";
var dash = " _ ";
var currentWordArr = [];

// var choices = ['apple pie', 'blueberry galette', 'chocolate donut', 'cupcakes', 'fruit tart', 'raspberry parfait',
//     'strawberry shortcake', 'turtle brownie'
// ];
var choices = ["apple", "blueberry", "chocolate"];
//get elements
var showLives = document.getElementById("my lives");
var gameStart = false;
//randomly select word


function reset() {
    currentWordArr = [];
    guess = [];
    chooseWord();
    counter = 6;
    updateDisplay();

}

function chooseWord() {
    var rand = Math.floor(Math.random() * choices.length);
    word = choices[rand];
    len = word.length;
    console.log(word);
    makeDashes();
    $("#myLives").append(counter);
}
//replace characters with dashes
function makeDashes() {

    for (var i = 0; i < len; i++) {
        currentWordArr.push(dash);
    }
    console.log(currentWordArr);

}

function updateDisplay() {
    $("#wordDiv").html(currentWordArr);
    $("#usedDiv").html(guess);
    $("#myLives").html(counter);
}
$(document).on("keypress", function (event) {
    // $("#wordDiv").empty();
    if (gameStart) {

        var userKey = event.key.toLowerCase();
        if (letters.indexOf(userKey) === -1) {
            return;
        }
        if (guess.indexOf(userKey) === -1) {
            guess.push(userKey);

            correct = false;
            //check if guesses letter is correct/ place it correctly  
            for (var i = 0; i < len; i++) {

                if (userKey === word[i]) {
                    currentWordArr[i] = userKey;

                    correct = true;
                }

            }
            if (!correct && counter > 0) {

                counter--;
            }
            updateDisplay();
            if (currentWordArr.indexOf(dash) === -1) {
                $("#myLives").text("You Win!");
                gameStart = false;
            } else if (counter === 0) {
                $("#myLives").text("You Lose!");
                gameStart = false;
            }

            console.log(counter);
        }

    } else {
        gameStart = true;
        reset();
    }


});