import menuItems from "../menu.json";

const menuElements = document.querySelector(".js-menu");

const menuContainer = createMenuItems(menuItems);

menuElements.insertAdjacentHTML("beforeend", menuContainer);

// шаблонная строка
function createMenuItems(menuItems) {
  return menuItems
    .map(({ name, description, image, price }) => {
      return `<li class="menu__item">
  <article class="card">
    <img
      src=${image}
      alt=${name}
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">${name}</h2>
      <p class="card__price">
        <i class="material-icons"> monetization_on </i>
        "${price}"
      </p>

      <p class="card__descr">
        "${description}"
      </p>

    </div>

    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>
      В корзину
    </button>
  </article>
</li>`;
    })
    .join("");
}
