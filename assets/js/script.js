let userName = document.querySelector(".userName");
let name_ = document.querySelector(".firstLastName");
let userPhone = document.querySelector(".phone");
let enterBtn = document.querySelector(".btn-login");
let validLabel = document.querySelector(".validation");
let overlayLogin = document.querySelector(".login");
let numberDay = document.querySelectorAll(".numberWeek");
let days = document.querySelectorAll("[data-days]");
let hello = document.getElementById("hello");

function check() {
  if (localStorage.getItem("userInfo")) {
    overlayLogin.style.display = "none";
    let username = JSON.parse(localStorage.getItem("userInfo")).userNamegit;
    hello.innerHTML = `سلام ${username} `;
  }
}
addEventListener("load", check);
check();

function validationMobile(event) {
  event.preventDefault();

  let userPhone_val = [];
  userPhone_val = userPhone.value;
  if (
    userPhone_val.length < 11 ||
    userPhone_val.length >= 12 ||
    userPhone_val[0] != 0 ||
    isNaN(userPhone_val)
  ) {
    validLabel.innerHTML = "عدد وارد شده صحیح نمیباشد.";
    validLabel.style.color = "red";
  } else {
    validLabel.innerHTML = "عدد وارد شده معتبر میباشد.";
    validLabel.style.color = "green";
    overlayLogin.style.display = "none";
    getInfo();
  }

  hello.innerHTML = `سلام ${userName.value} `;
}

enterBtn.addEventListener("click", validationMobile);

function getInfo() {
  const userInfo = {
    userName: userName.value,
    fisrtLastName: name_.value,
    phone: userPhone.value,
  };
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
}

days.forEach((item) => {
  function chooseDay() {
    days.forEach((el) => el.classList.remove("currentDay"));
    item.classList.add("currentDay");
  }
  item.addEventListener("click", chooseDay);
});
