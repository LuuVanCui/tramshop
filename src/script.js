import productsJapan from "./data/products_japan.js";
import productsVietnam from "./data/products_vi.js";
import { setupLanguageSwitch, updateActiveButton } from "./js/buttons.js";
import { LANGUAGES } from "./js/constants.js";
import { renderHeader } from "./js/header.js";
import { renderProducts } from "./js/products.js";

const buttons = {
  [LANGUAGES.VIETNAM]: document.getElementById(LANGUAGES.VIETNAM),
  [LANGUAGES.JAPAN]: document.getElementById(LANGUAGES.JAPAN),
};

const productsByLanguage = {
  [LANGUAGES.VIETNAM]: productsVietnam,
  [LANGUAGES.JAPAN]: productsJapan,
};

function switchLanguage(event) {
  const selectedLanguage = event.target.id;
  const selectedProducts = productsByLanguage[selectedLanguage];

  updateActiveButton(buttons, selectedLanguage);
  renderHeader(selectedLanguage, selectedProducts);
  renderProducts(selectedProducts);
}

setupLanguageSwitch(buttons, switchLanguage);

renderHeader(LANGUAGES.VIETNAM, productsVietnam);
renderProducts(productsVietnam);
