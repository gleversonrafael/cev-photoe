// variables
const mButton = document.querySelector("span#mIcon");
const mm = document.getElementById("mobMenu");
const mmSec = document.querySelector("section#mobMenu-sec");



// events
// menu fix
window.addEventListener("resize", function () {
    if(window.width >= 768) {
        mm.classList.remove("mmActive");
        mmSec.classList.remove("mmActive");
    }
    
});

mButton.addEventListener("click", mmSwitch);


// atribuir e remover classes
function mmSwitch() {
    mm.classList.toggle("mmActive");
    mmSec.classList.toggle("mmActive");
}


