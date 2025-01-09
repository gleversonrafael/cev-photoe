// variables
const mButton = document.querySelector("span#mIcon");
const mm = document.getElementById("mobMenu");
const mmSec = document.querySelector("section#mobMenu-sec");
let changeAllow = 0;

// events
// menu fix
window.addEventListener("resize", function () {
    if(window.innerWidth >= 768 && mm.classList.contains("mmActive")) {
        changeAllow = 1;

        mm.classList.remove("mmActive");
        mmSec.classList.remove("mmActive");
    
    } else if(window.innerWidth < 768 && changeAllow == 1) {
        mm.classList.add("mmActive");
        mmSec.classList.add("mmActive");

        changeAllow = 0;
    }
    
});

mButton.addEventListener("click", mmSwitch);


// atribuir e remover classes
function mmSwitch() {
    mm.classList.toggle("mmActive");
    mmSec.classList.toggle("mmActive");
}



