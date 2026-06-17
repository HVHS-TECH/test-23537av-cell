/****************************
This is a block comment.
****************************/


console.log("for loops 54.js");

//variables

/****************************
Main code
****************************/
function getFormInput() {
    const VERSE_FIELD = document.getElementById("verseField");
    let bottle = VERSE_FIELD.value;
    OUTPUT.innerHTML += "";
    for (let bottles = verses; bottles <= 1; bottles--) {
        if (bottles === 1) {
            OUTPUT.innerHTML += "<p> 10 green bottles hanging on the wall " + "<p>"
            OUTPUT.innerHTML += "<p> And if 1 green botlle should accidentally fall " + "<p>"
            OUTPUT.innerHTML += "<p> There will be 9 green bottles hanging on the wall" + "<p>"
        }
        else {
            OUTPUT.innerHTML += "<p>" + bottles + "green bottles hanging on the wall " + "<p>"
            OUTPUT.innerHTML += "<p>" + "And if 1 green botlle should accidentally fall " + "<p>"
            OUTPUT.innerHTML += "<p>" + "There will be 9 green bottles hanging on the wall " + (bottles - 1);
        }
    }
}
        if (bottle <= 1 ){
             OUTPUT.innerHTML += "<p> green bottles hanging on the wall " + "<p>"
        }
        else (bottle >= 1){
            OUTPUT.innerHTML += "<p> green bottle hanging on the wall " + "<p>"
        }



for (let count = 10; count > 0; count --) {
    console.log(" ");
    console.log(+ count + " green bottles hanging on the wall. ");
    console.log(+ count + " green bottles hanging on the wall. ");
    console.log("And if one green botlle should accidentally fall. ");
    console.log("there will be " + (count -1) + " green bottles hanging on the wall. ");



}






