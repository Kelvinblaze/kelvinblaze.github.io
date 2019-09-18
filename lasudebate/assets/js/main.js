var menuBar = document.querySelector("#bars");
var menuNavBar = document.querySelector(".mobile-list");

menuBar.addEventListener("click", e => {
  e.preventDefault();
  menuNavBar.classList.toggle("hide");
});

// DIALOGUE
var modal = document.querySelector("#form-modal");
var closeModal = document.querySelector(".closeModal");
var modalBtn = document.querySelector(".modalBtn");

modalBtn.addEventListener("click", e => {
  e.preventDefault();
  modal.showModal();
  document.body.style.overflow = "hidden";
});

closeModal.addEventListener("click", e => {
  e.preventDefault();
  modal.close();
  document.body.style.overflow = "auto";
});
