var menuBar = document.querySelector("#bars");
var menuNavBar = document.querySelector(".mobile-list");
var form = document.querySelector("#modalform");
let submitBtn = document.querySelector(".submitBtn");

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
  body.style.overflowY = "scroll";
  htmlDoc.classList = "rmvbackdrop";
});
// Loader
let loaderDiv = document.querySelector(".loader");
loaderDiv.style.display = "none";

// Show loader function

function showLoader() {
  loaderDiv.style.display = "block";
}
// Hide Loader
function hideLoader() {
  loaderDiv.style.display = "none";
}
// Close Modal function

function closeformModal() {
  modal.style.display = "none";
  body.style.overflowY = "scroll";
  htmlDoc.classList = "rmvbackdrop";
}

//  getting data
db.collection("student-details")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      console.log(doc.data());
    });
  });

// Add data to firebase
submitBtn.onclick = e => {
  e.preventDefault();

  // Form inputs
  let fullname = document.querySelector("#fullname").value;
  let uniName = document.querySelector("#uni_name").value;
  let uniAddress = document.querySelector("#uni_address").value;
  let email = document.querySelector("#email").value;
  let phoneNumber = document.querySelector("#phone_number").value;

  if (
    fullname != "" &&
    uniName != "" &&
    uniAddress != "" &&
    email != "" &&
    phoneNumber != ""
  ) {
    showLoader();
    db.collection("student-details")
      .add({
        fullname: fullname,
        university_name: uniName,
        university_address: uniAddress,
        email: email,
        phone_number: phoneNumber
      })
      .then(docRef => {
        if (docRef.id) {
          hideLoader();
          alert("Thank You, Your details has been submitted successfully");
          closeformModal();
        }
      })
      .catch(error => {
        console.error(error);
        alert("An error occured. Please Try Again");
      });

    // closeformModal();
  }
};

function sendData() {}
