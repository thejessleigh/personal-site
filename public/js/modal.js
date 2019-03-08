const closeButtons = document.getElementsByClassName("close-button");
const triggerList = ["noise", "breathe", "confetti", "dev", "mentoring", "zen", "why", "hard-way", "nuances", "syjl", "pyvideo"];


function toggleModal(triggerId) {
    var element = document.querySelector(triggerId + "modal");
    element.classList.toggle("show-modal");
}

Array.from(triggerList).forEach(function(triggerId) {
   var element = document.getElementById(triggerId);
   element.addEventListener("click", function() {toggleModal("#" + triggerId + "-")})
});
Array.from(closeButtons).forEach(function(closeButton){
    closeButton.addEventListener("click", function() {toggleModal(".show-")})
});
document.addEventListener("keyup", function(e) {
    if (e.key === "Escape") {
        toggleModal(".show-");
    }
});
