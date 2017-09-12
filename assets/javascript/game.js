var desserts =['apple pie','blueberry galette','chocolate donut','cupcakes','fruit tart', 'raspberry parfait',
'strawberry shortcake', 'turtle brownie'];
function chooseWord() {
    return Math.floor(Math.random() * desserts.length);
    

}
var word= desserts[chooseWord()];
console.log(word);