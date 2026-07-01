/****************************
This is a block comment.
****************************/


console.log("for loops 54.js");

//variables

/****************************
 main code
 ****************************/
function getFormInput() {
    const VERSE_FIELD = document.getElementById("verseField");
    let bottle = VERSE_FIELD.value;
    OUTPUT.innerHTML += "";
    for (let bottles = 10; bottles > 0; bottles--) {
        if (bottles <= 1) {
            OUTPUT.innerHTML += "<p>" + (bottles) + " green bottle hanging on the wall " + "<p>"
            OUTPUT.innerHTML += "<p>" + (bottles) + " green bottle hanging on the wall " + "<p>"
        } else {
            OUTPUT.innerHTML += "<p>" + (bottles) + " green bottles hanging on the wall " + "<p>"
            OUTPUT.innerHTML += "<p>" + (bottles) + " green bottles hanging on the wall " + "<p>"
        }
        OUTPUT.innerHTML += "<p> And if 1 green botlle should accidentally fall " + "<p>"

        if (count - 1 === 0){
            OUTPUT.innerHTML += "<p> there will be no green bottles hanging on the wall " + "<p>"
        } else if (count - 1 === 1) {
            OUTPUT.innerHTML += "<p> There will be 1 green bottle hanging on the wall." + "<p>"
        } else {
            "There will be " + (bottles- 1) + " green bottles hanging on the wall."
        }
}
}














/****************************
for (let count = 10; count > 0; count--) {


    console.log(" ");
    if (count === 1) {
        console.log(+ count + " green bottle hanging on the wall. ");
        console.log(+ count + " green bottle hanging on the wall. ");
    } else {
        console.log(+ count + " green bottles hanging on the wall. ");
        console.log(+ count + " green bottles hanging on the wall. ");
    }

    console.log("And if one green bottle should accidentally fall. ");



    if (count - 1 === 0) {
        console.log("There will be no green bottles hanging on the wall.");
    } else if (count - 1 === 1) {
        console.log("There will be 1 green bottle hanging on the wall.");
    } else {
        console.log("There will be " + (count - 1) + " green bottles hanging on the wall.");
    }
}
****************************/