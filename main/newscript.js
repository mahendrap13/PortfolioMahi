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
// ==================================progressbar circle ===============================

let circularprogress0 = document.querySelector(".circular-progressbar0");
let progressvalue0 = document.querySelector(".progress-value0");

let progressStratValue0 = 0,
  progressEndValue0 = 99,
  speed0 = 20;
let progress0 = setInterval(() => {
  progressStratValue0++;
  progressvalue0.textContent = `${progressStratValue0}%`;
  circularprogress0.style.background = `conic-gradient(#007ced ${
    progressStratValue0 * 3.6
  }deg, #444444 0deg)`;
  if (progressStratValue0 == progressEndValue0) {
    clearInterval(progress0);
  }
}, speed0);

let circularprogress1 = document.querySelector(".circular-progressbar1");
let progressvalue1 = document.querySelector(".progress-value1");

let progressStratValue1 = 0,
  progressEndValue1 = 95,
  speed1 = 20;
let progress1 = setInterval(() => {
  progressStratValue1++;
  progressvalue1.textContent = `${progressStratValue1}%`;
  circularprogress1.style.background = `conic-gradient(#007ced ${
    progressStratValue1 * 3.6
  }deg, #444444 0deg)`;
  if (progressStratValue1 == progressEndValue1) {
    clearInterval(progress1);
  }
}, speed1);
let circularprogress2 = document.querySelector(".circular-progressbar2");
let progressvalue2 = document.querySelector(".progress-value2");

let progressStratValue2 = 0,
  progressEndValue2 = 65,
  speed2 = 20;
let progress2 = setInterval(() => {
  progressStratValue2++;
  progressvalue2.textContent = `${progressStratValue2}%`;
  circularprogress2.style.background = `conic-gradient(#007ced ${
    progressStratValue2 * 3.6
  }deg, #444444 0deg)`;
  if (progressStratValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);
let circularprogress3 = document.querySelector(".circular-progressbar3");
let progressvalue3 = document.querySelector(".progress-value3");

let progressStratValue3 = 0,
  progressEndValue3 = 10,
  speed3 = 20;
let progress3 = setInterval(() => {
  progressStratValue3++;
  progressvalue3.textContent = `${progressStratValue3}%`;
  circularprogress3.style.background = `conic-gradient(#007ced ${
    progressStratValue3 * 3.6
  }deg, #444444 0deg)`;
  if (progressStratValue3 == progressEndValue3) {
    clearInterval(progress3);
  }
}, speed3);
let circularprogress4 = document.querySelector(".circular-progressbar4");
let progressvalue4 = document.querySelector(".progress-value4");

let progressStratValue4 = 0,
  progressEndValue4 = 6,
  speed4 = 20;
let progress4 = setInterval(() => {
  progressStratValue4++;
  progressvalue4.textContent = `${progressStratValue4}%`;
  circularprogress4.style.background = `conic-gradient(#007ced ${
    progressStratValue4 * 3.6
  }deg, #444444 0deg)`;
  if (progressStratValue4 == progressEndValue4) {
    clearInterval(progress4);
  }
}, speed4);
let circularprogress5 = document.querySelector(".circular-progressbar5");
let progressvalue5 = document.querySelector(".progress-value5");

let progressStratValue5 = 0,
  progressEndValue5 = 5,
  speed5 = 20;
let progress5 = setInterval(() => {
  progressStratValue5++;
  progressvalue5.textContent = `${progressStratValue5}%`;
  circularprogress5.style.background = `conic-gradient(#007ced ${
    progressStratValue5 * 3.6
  }deg, #444444 0deg)`;
  if (progressStratValue5 == progressEndValue5) {
    clearInterval(progress5);
  }
}, speed5);
