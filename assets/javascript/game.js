var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guess; //guessed letter
var correct; //correct guess
var lives; //lives
var counter; // count correct guesses
var word = "";
var len = "";
var dash = " _ ";
var currentWordArr = [];
// var choices = ['apple pie', 'blueberry galette', 'chocolate donut', 'cupcakes', 'fruit tart', 'raspberry parfait',
//     'strawberry shortcake', 'turtle brownie'
// ];
var choices = ["apple", "blueberry", "chocolate"];
//get elements
var showLives=document.getElementById("my lives");

//randomly select word
chooseWord();

function chooseWord() {
    var rand = Math.floor(Math.random() * choices.length);
    word = choices[rand];
    len = word.length;
    console.log(word);
    makeDashes();
}
//replace characters with dashes
function makeDashes() {

    for (var i = 0; i < len; i++) {
       
        currentWordArr.push(dash);
        var newDiv = $("<div class='letter'>");
        newDiv.text(" _ ");
        $("#wordDiv").append(newDiv);
    }
    console.log(currentWordArr);

}
//create guesses
counter=6;
$(document).on("keypress", function (event) {
    $("#wordDiv").empty();
    
   var userKey = event.key;
   correct=false;
 //check if guesses letter is correct/ place it correctly  
    for (var i = 0; i < len; i++) {
        $("#myLives").empty();
        if ( userKey === word[i])
        {
            currentWordArr[i] = userKey;
            var newDiv = $("<div class='letter'>");
            newDiv.text(currentWordArr[i]);
            $("#wordDiv").append(newDiv);
            correct=true;

        }  
        else if ( currentWordArr[i] != dash ){
            var newDiv = $("<div class='letter'>");
            newDiv.text(currentWordArr[i]);
            $("#wordDiv").append(newDiv);

        }
        else{
            var newDiv = $("<div class='letter'>");
            newDiv.text(dash);
            $("#wordDiv").append(newDiv);
            // var livesDiv =$("<div class='number'>");
            // livesDiv.text(counter);
            // for (c=6; c>=0; c--) {
            //     counter()
            
        
            
        }
    }
    if (correct === false) {
        counter--;
    }
    //console.log(currentWordArr);
console.log(counter);

$("#myLives").append(counter);

});


// function makeDashes() {
//     var currentWordArr = [];
//     for (i = 0; i <= wordSplit.length; i++) {
//         var dash = ["_"];
//         currentWordArr.push(dash);
//     }
//     //display hidden word
//     rightWordText.TextContent = currentWordArr;
//     return currentWordArr;

//}






// user guesses a letter

// document.onkeyup = function (guess) {
//     for (i = 0; i <= letters.length; i++)

// }
// //