const switchEl = document.querySelector("#theme-switch-toggle");
const body = document.querySelector("body");

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

switchEl.addEventListener("change", onCheckboxClick);

const currentTheme = localStorage.getItem("theme");

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

function addCurrentTheme() {
  if (currentTheme) {
    body.classList.add(currentTheme);
  }
  if (body.classList.contains(Theme.DARK)) {
    switchEl.checked = true;
  }
}

addCurrentTheme();
switchEl.addEventListener("change", onCheckboxClick);
