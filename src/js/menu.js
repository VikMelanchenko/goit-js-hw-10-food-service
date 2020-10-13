import cardMenuTmpl from "../templates/card-menu.hbs";
import cardsMenuTmpl from "../templates/cards-menu.hbs";

import menuItems from "../menu.json";

const menuElements = document.querySelector(".js-menu");

const menuContainer = createMenuItems(menuItems);

menuElements.insertAdjacentHTML("beforeend", menuContainer);

// шаблонная строка
function createMenuItems(menuItems) {
  return cardsMenuTmpl(menuItems);
}
