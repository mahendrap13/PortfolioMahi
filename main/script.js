
// ==================navbar menu  ====================

function mainbar() {
  let navbar = document.getElementById("right-nav");
  navbar.classList.toggle("mahis");
}

document.querySelector(".menu-icon").addEventListener("click", function () {
  let lines = document.querySelector(".menu-icon").children;
  if (lines[0].classList.contains("active")) {
    for (let i in lines) {
      lines[i].classList.remove("active");
      lines[i].classList.add("deactive");
    }
  } else {
    for (let i in lines) {
      lines[i].classList.remove("deactive");
      lines[i].classList.add("active");
    }
  }
});










// ==================knowledge linear ====================

function carousel() {
  let carouselSlider = document.querySelector(".knows");
  let list = document.querySelector(".know");
  let item = document.querySelectorAll(".imgs");
  let list2;

  const speed = 1;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }
  function moveFirst() {
    x -= speed;
    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }
  function moveSecond() {
    x2 -= speed;
    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }
  function hover() {
    clearInterval(a);
    clearInterval(b);
  }
  function unhover() {
    a = setInterval(moveFirst, 10);
    b = setInterval(moveSecond, 10);
  }

  clone();
  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);
  carouselSlider.addEventListener("mouseenter", hover);
  carouselSlider.addEventListener("mouseleave", unhover);
}
carousel();

// ======================================validation==============================
function validate() {
  let Name = document.getElementById("name");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");
  let message = document.getElementById("message");
  let alertName = document.getElementById("alert-name");
  let alertEmail = document.getElementById("alert-email");
  let alertSubject = document.getElementById("alert-subject");
  let alertMessage = document.getElementById("alert-message");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  flag = true;
  if (Name.value == "") {
    alertName.style.display = "block";
    Name.style.border = "2px solid red";
    flag = false;
  } else if (Name.value !== "") {
    alertName.style.display = "none";
    Name.style.border = "2px solid #555555";
  }
  if (!email.value.match(mailformat)) {
    alertEmail.style.display = "block";
    email.style.border = "2px solid red";
    flag = false;
  } else if (email.value.match(mailformat)) {
    alertEmail.style.display = "none";
    email.style.border = "2px solid #555555";
  }
  if (subject.value == "") {
    alertSubject.style.display = "block";
    subject.style.border = "2px solid red";
    flag = false;
  } else if (subject.value !== "") {
    alertSubject.style.display = "none";
    subject.style.border = "2px solid #555555";
  }
  if (message.value == "") {
    alertMessage.style.display = "block";
    message.style.border = "2px solid red";
    flag = false;
  } else if (message.value !== "") {
    alertMessage.style.display = "none";
    message.style.border = "2px solid #555555";
  }
  return flag;
}

// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbwxCSCCBBz1kE6RXej9I1kb_dQhraE9aFVVEzrksEy01X6IAtUCx-KXycJB9OqnbqWQyg/exec";
// const form = document.forms["submit-to-google-sheet"];
// const msg = document.getElementById("msg");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       msg.innerHTML = "Message send seccessfully";
//       setTimeout(function () {
//         msg.innerHTML = "";
//       }, 5000);
//       form.reset();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });
