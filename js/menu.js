const navMain = document.querySelector(".main-nav");
const navButtonOpen = document.querySelector(".nav-toggle_open");
const navButtonClose = document.querySelector(".nav-toggle_closed");
const headerTop = document.querySelector(".header__top");

headerTop.classList.remove("header__top_nojs");


navButtonOpen.addEventListener("click", function() {
  navMain.classList.remove("main-nav_closed");
  headerTop.classList.remove("header__top_close");
  headerTop.classList.add("header__top_open");
});

navButtonClose.addEventListener("click", function() {
  navMain.classList.add("main-nav_closed");
  headerTop.classList.add("header__top_close");
  headerTop.classList.remove("header__top_open");
});
