import { translations } from "./constants.js";
import { scrollToCategory } from "./scroller.js";

export function renderFooter(language, products) {
  updateFooterContacts(language);
  updateCategoryTitle(language);
  updateFooterCategories(products);
  updateFooterBranding(language);
}

function updateCategoryTitle(language) {
  const titleElement = document.querySelector(".footer-categories__title");
  titleElement.innerHTML = translations.common.categories[language];
}

function updateFooterCategories(products) {
  const categoriesList = document.querySelector(".footer-categories");

  categoriesList.innerHTML = "";
  const categories = Object.keys(products);
  categories.forEach((category) => {
    const sectionId = category.toLowerCase().replace(/\s+/g, "-");
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${sectionId}`;
    a.textContent = category;
    a.onclick = (e) => {
      e.preventDefault();
      scrollToCategory(category);
    };
    li.appendChild(a);
    categoriesList.appendChild(li);
  });
}

function updateFooterContacts(language) {
  const footerContactUs = document.querySelector(".footer-contacts");
  footerContactUs.innerHTML = `
    <h4>${translations.footer.contactUs[language]}</h4>
    <p>${translations.footer.phone[language]}</p>
    <p>${translations.footer.facebook}</p>
  `;
}

function updateFooterBranding(language) {
  const brandingElement = document.querySelector(".footer-branding");
  brandingElement.innerHTML = translations.footer.copyright[language];
}
