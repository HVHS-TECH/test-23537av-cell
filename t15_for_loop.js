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
    let bottles = 100
    OUTPUT.innerHTML += "";
    for (let i = 1; i < 21; i--) {
        if (bottles === 1) {
        OUTPUT.innerHTML += "<p> 1 green bottle hanging on the wall " + "<p>"
        OUTPUT.innerHTML += "<p> And if 1 green botlle should accidentally fall " + "<p>"  
          OUTPUT.innerHTML += "<p> There will be no green bottles hanging on the wall" + "<p>" 
         }
        else { 
            OUTPUT.innerHTML += "<p>" + "<p>"  
         }
        
        
        }


    }


}





