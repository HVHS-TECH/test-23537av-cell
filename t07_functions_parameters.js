/* Paste your code from task 6 here */
/* Paste your code from task 5 here */
console.log("Running T1.js");

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
const OUTPUT = document.getElementById("JavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
OUTPUT.innerHTML += "<p> Hello " + userName + "</p>";
OUTPUT.innerHTML += "<p> I am 17 years old .</p>";
OUTPUT.innerHTML += "<p> I was born in 2008 .</p>";
writeLine()

/****************************
Main code
****************************/


function writeLine (){
OUTPUT.innerHTML += "<p> Welcome to the shop .</p>";}
displayProduct ("Chocolate bar" , 4);
displayProduct ("Chips" , 3);
displayProduct ("Drink", 2.50);

displayProduct (_name, _price){
OUTPUT.innerHTML += "<p>" + _name + _price + "</p>"
}

