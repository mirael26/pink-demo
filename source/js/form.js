var form = document.querySelector(".contest__form");
var popupSuccess = document.querySelector(".popup--success");
var popupFailure = document.querySelector(".popup--failure");
var popupClose = document.querySelector(".popup__button");

var name = form.querySelector("[name=name]");
var surname = form.querySelector("[name=surname]");
var email = form.querySelector("[name=email]");

form.addEventListener("submit", function(evt) {
  if (!name.value || !surname.value || !email.value) {
    evt.preventDefault();
    popupFailure.classList.remove("hidden");
  } else {
    evt.preventDefault();
    popupSuccess.classList.remove("hidden");
  }
})

popupClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  if(!popupFailure.classList.contains("hidden")) {
    popupFailure.classList.add("hidden");
  }
  if(!popupSuccess.classList.contains("hidden")) {
    popupSuccess.classList.add("hidden");
  }
})

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    evt.preventDefault();
    if(!popupFailure.classList.contains("hidden")) {
      popupFailure.classList.add("hidden");
    }
    if(!popupSuccess.classList.contains("hidden")) {
      popupSuccess.classList.add("hidden");
    }
  }
})

