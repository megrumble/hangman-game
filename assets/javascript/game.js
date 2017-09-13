var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guess = ""; //guess a letter
var display = ""; //correct letter-displayed
var wrong = 0; //wrong guesses
var lives = 6; //lives
var choices = ['apple pie', 'blueberry galette', 'chocolate donut', 'cupcakes', 'fruit tart', 'raspberry parfait',
    'strawberry shortcake', 'turtle brownie'
];
//randomly select word
function chooseWord() {
    return Math.floor(Math.random() * choices.length);
}
var word = choices[chooseWord()];
console.log(word);
//split word into characters
var wordSplit = word.split("");
return wordSplit;
//replace characters with dashes
function makeDashes() {
    var dashArr = [];
    for (i = 0; i <= wordSplit.length; i++) {
        var dash = ["_"];
        dashArr.push(dash);
    }
    //display hidden word
    rightWordText.TextContent = dashArr;
    return dashArr;

}






// user guesses a letter
document.onkeyup = function (guess) {
    for (i = 0; i <= letters.length; i++)

}

//