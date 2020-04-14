var header = document.querySelector(".page-header");
var menu = document.querySelector(".main-nav__list");
var buttonOpen = document.querySelector(".main-nav__button-open");
var buttonClose = document.querySelector(".main-nav__button-close");

menu.classList.add("hidden");
header.classList.add("page-header--menu-close");
buttonOpen.classList.remove("hidden");

buttonOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.remove("hidden");
  header.classList.remove("page-header--menu-close");
  buttonOpen.classList.add("hidden");
  buttonClose.classList.remove("hidden");
});

buttonClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.add("hidden");
  header.classList.add("page-header--menu-close");
  buttonOpen.classList.remove("hidden");
  buttonClose.classList.add("hidden");
});

