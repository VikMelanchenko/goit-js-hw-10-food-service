const switchEl = document.querySelector("#theme-switch-toggle");
const body = document.querySelector("body");

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

switchEl.addEventListener("click", onCheckboxClick);

function onCheckboxClick(event) {
  if (switchEl.checked) {
    body.classList.add(Theme.DARK);
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem("theme", Theme.DARK);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem("theme", Theme.LIGHT);
  }
}
