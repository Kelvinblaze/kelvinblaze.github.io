var menuBar = document.querySelector("#bars");
var menuNavBar = document.querySelector(".mobile-list");

menuBar.addEventListener("click", e => {
  e.preventDefault();
  menuNavBar.classList.toggle("hide");
});

// DIALOGUE
var htmlDoc = document.all[0];
var body = document.body;
var modal = document.querySelector(".form-modal");
var closeModal = document.querySelector(".closeModal");
var modalBtn = document.querySelector(".modalBtn");

modalBtn.addEventListener("click", e => {
  e.preventDefault();
  modal.style.display = "block";
  body.style.overflow = "hidden";
  htmlDoc.classList = "backdrop";
});

closeModal.addEventListener("click", e => {
  e.preventDefault();
  modal.style.display = "none";
  body.style.overflow = "scroll";
  htmlDoc.classList = "rmvbackdrop";
});
