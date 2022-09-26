const header = document.querySelector(".container--main__header");
const menu = document.querySelector(".container--main__header--hamburger");
const overlay = document.querySelector(".container--main__header--overlay");

menu.addEventListener("click", (e) => {
  header.classList.toggle("open");
  menu.classList.toggle("open");
  overlay.classList.toggle("open");
});
