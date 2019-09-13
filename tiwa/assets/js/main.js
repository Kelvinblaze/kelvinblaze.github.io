var joinNow = document.getElementById("joinNow");
joinNow.addEventListener("click", function(e){

e.preventDefault()

// Show Modal for Beta Testing
var showModal = document.getElementById("myDialogue");
showModal.showModal();
document.body.style.overflowY = "hidden";
});
