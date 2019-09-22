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

var i = 0;
var j = 0;
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
    cardId = `card${i++}`;
    card.setAttribute("id", cardId);

    // Details attributes and classes
    details.classList.add("details");
    details.setAttribute("id", "details");

    // Paragraph attributes and classes
    myPara.classList.add("text-field");
    myPara.setAttribute("contenteditable", "true");
    // myPara.setAttribute("id", "text-field");
    myPara.textContent = para;

    // Create Delete Btn
    deleteBtn_wrapper.classList.add("delBtn");
    deleteBtn.classList.add("fa", "fa-times-circle");
    deleteId = `delete${j++}`;
    deleteBtn.setAttribute("id", deleteId);

    details.append(myPara);
    deleteBtn_wrapper.append(deleteBtn);
    card.append(details, deleteBtn_wrapper);
    document.getElementById("main").appendChild(card);

    // Card functionalities

    var deleteItem = document.getElementById(deleteId);
    deleteItem.addEventListener("click", function() {
      var confirmDelete = confirm("Are you sure you want to delete this task?");
      if (confirmDelete) {
        deleteItem.parentElement.parentElement.remove();
      } else {
        return;
      }
    });

    let myCard = deleteItem.parentElement.parentElement;
    myCard.addEventListener("dblclick", e => {
      e.preventDefault();
      myTextField = deleteItem.parentElement.parentElement.children[0].children[0].style.textDecoration =
        "line-through";
      console.log(myTextField);
    });

    myCard.addEventListener("click", e => {
      e.preventDefault();
      myTextField = deleteItem.parentElement.parentElement.children[0].children[0].style.textDecoration =
        "none";
      console.log(myTextField);
    });
  } else {
    return;
  }
});
