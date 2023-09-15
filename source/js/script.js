let navButton = document.querySelector(".navigation__button");
let toggle = document.querySelector(".navigation__toggle");
let nav = document.querySelector(".navigation");
let body = document.querySelector(".page__body");

navButton.addEventListener("click", function () {
  toggle.classList.toggle("navigation__toggle--open");
  nav.classList.toggle("navigation--open");
  body.classList.toggle("page__body--no-scroll");
})
