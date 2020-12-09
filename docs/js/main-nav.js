var header = document.querySelector(".page-header");
var menu = document.querySelector(".main-nav__list");
var button = document.querySelector(".main-nav__button");
var iconOpen = document.querySelector(".main-nav__icon--open");
var iconClose = document.querySelector(".main-nav__icon--close");

menu.classList.add("hidden");
header.classList.add("page-header--menu-close");
button.classList.remove("hidden");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("hidden");
  header.classList.toggle("page-header--menu-close");
  iconOpen.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
});
