import { translations } from "./constants.js";
import { scrollToCategory } from "./scroller.js";

export function renderHeader(language, products) {
  updateStaticLinks(language);
  populateCategoriesList(products);
}

function updateStaticLinks(language) {
  document.querySelector('[data-key="home"]').textContent =
    translations.header.home[language];
  document.querySelector('[data-key="categories"]').textContent =
    translations.common.categories[language];
}

function populateCategoriesList(products) {
  const categoriesList = document.getElementById("categories-list");

  categoriesList.innerHTML = "";

  Object.keys(products).forEach((category) => {
    const sectionId = category.toLowerCase().replace(/\s+/g, "-");
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${sectionId}`;
    a.className = "sidebar__dropdown-link";
    a.textContent = category;
    a.onclick = (e) => {
      e.preventDefault();
      scrollToCategory(category);
    };
    li.appendChild(a);
    categoriesList.appendChild(li);
  });
}
