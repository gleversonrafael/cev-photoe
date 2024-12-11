// variables
const mButton = document.querySelector("span#mIcon");
const mm = document.getElementById("mobMenu");
const mmSec = document.querySelector("section#mobMenu-sec");



// events
mButton.addEventListener("click", mmSwitch);


// atribuir e remover classes

function mmSwitch() {
    mm.classList.toggle("mmActive");
    mmSec.classList.toggle("mmActive");
}