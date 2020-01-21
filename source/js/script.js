var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

var link = document.querySelector(".feedback__send-btn")
var failure = document.querySelector(".modal-failure");
var success = document.querySelector(".modal-success");
var close = popup.querySelector(".modal__close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=feedback-name]");
var surname = popup.querySelector("[name=feedback-surname]");
var isStorageSupport = true;
var storage = "";

  try {
    storage = localStorage.getItem("feedback-name");
  } catch (err) {
    isStorageSupport = false;
  }
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-failure");
});
form.addEventListener("submit", function (evt) {
  if (!feedback-name.value || !feedback-surname.value) {
    evt.preventDefault();
      popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-failure");
    console.log("Нужно ввести имя, фамилию, номер телефона и электронную почту");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("feedback-name", feedback-name.value);
    }
    popup.classList.add("modal-succsess");
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-failure");
    }
  }
});

