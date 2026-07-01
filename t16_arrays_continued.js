/* Paste your code from the last task */

/* Paste your code from task 14 here*/
console.log("Running T1.js");

//variables

/****************************
Main code
****************************/
let userName = "Anusha";
let userAge = 17;
let userCurrentYear = 2026;
let pocketMoney = 30;
let myBirthYear = 2008;
let myNumber = 15;
let tenYear = 10;
let myOthernumber = 17;
let number = 3;
function start() {
    console.log("As of " + userCurrentYear + " you are " + userAge);
    console.log("you have " + pocketMoney + " dollars ");
    console.log("you were born in " + myBirthYear);
    console.log("In 10 years you will be ", + userAge + tenYear);
    console.log("you spend half of your money, now you have", + myNumber);
    console.log("Then you get $3 , now you have", + myNumber + number);


    OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
    OUTPUT.innerHTML += "<p> Hello " + userName + "</p>";
    OUTPUT.innerHTML += "<p>I am 17 years old.</p>";
    OUTPUT.innerHTML += "<p> I am a student of year 12.</p>";
    writeLine();

    /****************************
     Functions
    ****************************/

    function writeLine() {
        OUTPUT.innerHTML += "<p> Welcome to the shop</p>"
    }
}
const OUTPUT = document.getElementById("JavaScriptOutput");

function getFormInput() {
    const NAME_FIELD = document.getElementById("nameField");
    let nameUser = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p> Your name is " + nameUser + "</p>";

    const AGE_FIELD = document.getElementById("ageField");
    let ageUser = AGE_FIELD.value;
    OUTPUT.innerHTML += "<p> Your age is " + ageUser + "</p>";

    const Pocket_Money = document.getElementById("pocketMoney");
    let money = Pocket_Money.value;
    OUTPUT.innerHTML += "<p> You have " + money + "</p>";
}
let chocolate = 4;
if (chocolate >= 4) {
    OUTPUT.innerHTML += "<p> You CAN afford a chocolate bar " + "</p>";
} else {
    OUTPUT.innerHTML += "<p> Sorry you CAN'T afford a chocolate bar " + "</p>";
}
function calculateChange(pocketMoney) {
    return _money - _price;
}
function getFormInput() {
    const Pocket_Money = document.getElementById("pocketMoney");
    let money = Pocket_Money.value;
    OUTPUT.innerHTML += "<p> You have " + money + "</p>";
    let price = 96;
    if (chocolate >= 4) {
        OUTPUT.innerHTML += "<p> chocolate costs" + ": $ " + chocolate + "</p>";
        OUTPUT.innerHTML += "<p> You will get" + ": $ " + price + " change </p>";
    }
}
function getFormInput() {
    let messages = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
    const CHOCOLATE_FIELD = document.getElementById("ChocolateField");
    let userChoice = CHOCOLATE_FIELD.value;
    OUTPUT.innerHTML += "<p> You chose: " + messages[userChoice] + "</p>";
}
let shoppingList = [];
    Function addItem() {
    const shoppingField = document.getElementById("shoppingField");
    let userItem = SHOPPING_FIELD.value;


}



