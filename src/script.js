import productsJapan from "./data/products_japan.js";
import productsVietnam from "./data/products_vi.js";
import { renderAboutSession } from "./js/about.js";
import { setupLanguageSwitch, updateActiveButton } from "./js/buttons.js";
import { LANGUAGES } from "./js/constants.js";
import { renderContactDialog } from "./js/contact-dialog.js";
import { renderFooter } from "./js/footer.js";
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

setupLanguageSwitch(buttons, switchLanguage);
updateData(LANGUAGES.VIETNAM, productsVietnam);

function switchLanguage(event) {
  const selectedLanguage = event.target.closest("button").id;
  const selectedProducts = productsByLanguage[selectedLanguage];

  updateActiveButton(buttons, selectedLanguage);
  updateData(selectedLanguage, selectedProducts);
}

function updateData(language, products) {
  renderHeader(language, products);
  renderAboutSession(language);
  renderProducts(products);
  renderFooter(language, products);
  renderContactDialog(language);
}
