let checkbox = document.querySelector("input[name='theme']");
let htmlElement = document.documentElement;

checkbox.addEventListener("change", (e) => {
  if (checkbox.checked) {
    smoothTrans();
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    htmlElement.setAttribute("data-theme", "light");
  }
});

let smoothTrans = () => {
  htmlElement.classList.add("transition");
  window.setTimeout(() => {
    htmlElement.classList.remove("transition");
  }, 1000);
};
