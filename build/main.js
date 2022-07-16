const _hamburger = document.querySelector(".hamburger");
const _listMenu = document.querySelector(".list-menu");

_hamburger.addEventListener("click", () => {
  _hamburger.classList.toggle("active");
  _listMenu.classList.toggle("active");
})

document.querySelectorAll("list").forEach(n => n.addEventListener("click", () => {
  _hamburger.classList.remove("avtive");
  _listMenu.classList.remove("active");
}))