var cardHover = document.getElementById("card");
cardHover.addEventListener("mouseover", function() {
  document.getElementById("delete").style.display = "block";
});
var cardHover = document.getElementById("card");
cardHover.addEventListener("mouseout", function() {
  document.getElementById("delete").style.display = "none";
});

// Make Editable
var details = document.getElementById("details");
details.addEventListener("click", function() {
  document.getElementById("details").setAttribute("contenteditable", "true");
});

// Remove Editable
var details = document.getElementById("details");
details.addEventListener("mouseout", function() {
  document.getElementById("details").setAttribute("contenteditable", "false");
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
document.getElementById("today-date").innerHTML =  fullDate;

// Add New Card
var addBtn = document.getElementById("add");
addBtn.addEventListener("click", function() {
  var para = prompt("Enter a task");
  if (para) {
    const card = document.createElement('div');
    const details = document.createElement('div');
    const myPara = document.createElement('p');

    card.classList.add('card');
    details.classList.add('details');
    myPara.classList.add('text-field');

    myPara.textContent = para;

    details.append(myPara);
    card.append(details);

    document.getElementById("main").append(card);

  } else {
    return;
  }
});

