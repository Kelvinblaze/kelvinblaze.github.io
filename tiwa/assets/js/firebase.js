// Initialize Cloud Firestore through Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCNYtvx4lY9TdcgBlSjopRiQ1EaB0_rmJA",
    authDomain: "tiwa-mobileapp.firebaseapp.com",
    databaseURL: "https://tiwa-mobileapp.firebaseio.com",
    projectId: "tiwa-mobileapp",
    storageBucket: "tiwa-mobileapp.appspot.com",
    messagingSenderId: "802681683062",
    appId: "1:802681683062:web:81ed300c2544367d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var primaryBtn = document.querySelector(".submitBtn");
var formCard = document.querySelector("#myDialogue");
var successMsg = document.querySelector(".success-message");
var spinnerCard = document.querySelector(".loader_card");
var body = document.body;

var closeModal = document.getElementById("closeDialog");
closeModal.addEventListener("click", function (e) {
    e.preventDefault();
    formCard.close();
    document.body.classList.toggle("over-flow-y");
});

primaryBtn.onclick = e => {
    e.preventDefault();

    formCard.close();
    let name = document.querySelector('input[name="Name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let tel = document.querySelector('input[name="tel"]').value;
    let role = document.querySelector('input[name="who"]').value;
    if (name != "" && email != "" && tel != "") {
        db.collection("mobile_app_testers")
            .add({
                fullname: name,
                email_address: email,
                phone_number: tel,
                who_are_you: role,
                date_added: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(function (docRef) {
                console.log(docRef);
                alert("Successful");
                if (docRef.id) {
                    document.body.classList.toggle("over-flow-y");
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("An error occurred. Please try again.");
                formCard.classList.toggle("d-none");
            });
    } else {
        formCard.classList.toggle("d-none");
    }
};