const openToggle = document.querySelector("#openToggle");
const closeToggle = document.querySelector("#closeToggle");
const mobileNav = document.querySelector("#mobileNav");

// on load closeToggle display is set to none
closeToggle.style.display = "none";
mobileNav.style.display = "none";

// Open menu and change open toggle to none
openToggle.addEventListener("click", () => {
  openToggle.style.display = "none";
  closeToggle.style.display = "block";
  mobileNav.style.display = "block";
  window.document.body.style.overflow = "hidden";
});

// Close menu and change close toggle to none

closeToggle.addEventListener("click", () => {
  window.document.body.style.overflow = "scroll";
  openToggle.style.display = "block";
  closeToggle.style.display = "none";
  mobileNav.style.display = "none";
});
