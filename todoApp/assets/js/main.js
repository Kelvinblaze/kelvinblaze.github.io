// Date
var today = new Date();
var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

switch (month) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "Feburary";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
    break;
}

var fullDate = `${day} ${month}, ${year}`;
document.getElementById("today-date").innerHTML = fullDate;

// Add New Card
var addBtn = document.getElementById("add");
addBtn.addEventListener("click", function() {
  var para = prompt("Enter a task");

  if (para) {
    const card = document.createElement("div");
    const details = document.createElement("div");
    const myPara = document.createElement("p");

    const deleteBtn_wrapper = document.createElement("div");
    const deleteBtn = document.createElement("i");

    // Class attributes and classes
    card.classList.add("card");
    card.setAttribute("id", "card");

    // Details attributes and classes
    details.classList.add("details");
    details.setAttribute("id", "details");

    // Paragraph attributes and classes
    myPara.classList.add("text-field");
    myPara.setAttribute("contenteditable", "true");
    myPara.setAttribute("id", "text-field");
    myPara.textContent = para;

    // Create Delete Btn
    deleteBtn_wrapper.classList.add("delBtn");
    deleteBtn.classList.add("fa", "fa-times-circle");
    deleteBtn.setAttribute("id", "delete");

    details.append(myPara);
    deleteBtn_wrapper.append(deleteBtn);
    card.append(details, deleteBtn_wrapper);
    document.getElementById("main").appendChild(card);

    // card hovering and delete functions
    var cardHover = document.getElementById("card");

    cardHover.addEventListener("mouseover", function() {
      console.log("i am in");
      document.getElementById("delete").style.display = "block";
    });

    var cardHover = document.getElementById("card");
    cardHover.addEventListener("mouseout", function() {
      document.getElementById("delete").style.display = "none";
    });

    // Make Editable
    var changeDetails = document.getElementById("details");
    details.addEventListener("click", function() {
      document
        .getElementById("details")
        .setAttribute("contenteditable", "true");
    });

    // Remove Editable
    var changeDetails = document.getElementById("details");
    details.addEventListener("mouseout", function() {
      document
        .getElementById("details")
        .setAttribute("contenteditable", "false");
    });

    // Delete Card
    var deleteCard = document.getElementById("delete");
    deleteCard.addEventListener("click", function() {
      var x = confirm("Are you sure you want to delete this?");
      if (x) {
        document.getElementById("card").remove();
      } else {
        return;
      }
    });
  } else {
    return;
  }
});
