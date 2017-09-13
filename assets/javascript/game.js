var letter =["a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guess; //guess a letter
var correct; //correct letter
var wrong; //wrong letter
var lives; //wrong guesses
var choices =['apple pie','blueberry galette','chocolate donut','cupcakes','fruit tart', 'raspberry parfait',
'strawberry shortcake', 'turtle brownie'];
//randomly select word
function chooseWord() {
return Math.floor(Math.random() * choices.length);
}
 var word=choices[chooseWord()];   
console.log(word);
//split word into characters

//replace characters with dashes
function createMask(m)
{
mask = "";
word.lenght = m.length;
 
for (i = 0; i < word.lenght; i ++)
{
mask += "_";
}
return mask;
 console.log(mask);
}

//display hidden word
