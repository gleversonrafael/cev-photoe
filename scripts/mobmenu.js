// variables
const mButton = document.querySelector("span#mIcon");
const mm = document.getElementById("mobMenu");
const mmSec = document.querySelector("section#mobMenu-sec");



// events
document.body.addEventListener("change", fixMenu);
mButton.addEventListener("click", mmSwitch);


// atribuir e remover classes
function mmSwitch() {
    mm.classList.toggle("mmActive");
    mmSec.classList.toggle("mmActive");
}

function fixMenu() {
    // variables

    const mArea = document.getElementsByClassName("mArea");
    const searchIco = document.getElementById("searchIco");
    const searchIcoA = document.getElementById("searchIcoA");
    
    if(window.innerWidth >= "768px") {
        mm.classList.remove("mmActive");
        mmSec.classList.remove("mmActive");

    } else {

    }

}



