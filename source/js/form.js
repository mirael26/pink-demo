var form = document.querySelector(".contest__form");
var submit = document.querySelector(".contest-form__button");
var popupSuccess = document.querySelector(".popup--success");
var popupFailure = document.querySelector(".popup--failure");
var buttonErrorOk = document.querySelector("#button-error-ok");
var buttonSuccessOk = document.querySelector("#button-success-ok");

var firstname = form.querySelector("[name=firstname]");
var surname = form.querySelector("[name=surname]");
var email = form.querySelector("[name=email]");

submit.addEventListener("click", function(evt) {
  console.log(firstname.value);
  console.log(surname.value);
  console.log(email.value);
  if(!firstname.value || !surname.value || !email.value) {
    evt.preventDefault();
    popupFailure.classList.remove("hidden");
  }
})

form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    popupSuccess.classList.remove("hidden");
})

buttonErrorOk.addEventListener("click", function(evt) {
  evt.preventDefault();
  if(!popupFailure.classList.contains("hidden")) {
    popupFailure.classList.add("hidden");
  }
})

buttonSuccessOk.addEventListener("click", function(evt) {
  evt.preventDefault();
  if(!popupSuccess.classList.contains("hidden")) {
      popupSuccess.classList.add("hidden");
    }
})


// popupClose.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   if(!popupFailure.classList.contains("hidden")) {
//     popupFailure.classList.add("hidden");
//   }
//   if(!popupSuccess.classList.contains("hidden")) {
//     popupSuccess.classList.add("hidden");
//   }
// })

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

