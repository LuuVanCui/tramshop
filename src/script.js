import productsJapan from "./data/products_japan.js";
import productsVietnam from "./data/products_vi.js";

const LANGUAGES = Object.freeze({
  VIETNAM: "lang-vi",
  JAPAN: "lang-japan",
});
const translations = Object.freeze({
  home: { [LANGUAGES.VIETNAM]: "Trang chủ", [LANGUAGES.JAPAN]: "ホーム" },
  categories: {
    [LANGUAGES.VIETNAM]: "Danh mục",
    [LANGUAGES.JAPAN]: "カテゴリー",
  },
});

// Get the buttons by their IDs
const viButton = document.getElementById(LANGUAGES.VIETNAM);
const jpButton = document.getElementById(LANGUAGES.JAPAN);

function switchLanguage(event) {
  viButton.classList.remove("active");
  jpButton.classList.remove("active");

  event.target.classList.add("active");

  const selectedLanguage = event.target.id;
  const selectedProducts =
    event.target.id === LANGUAGES.VIETNAM ? productsVietnam : productsJapan;
  renderSidebar(selectedLanguage, selectedProducts);
  renderProducts(selectedProducts);
}

viButton.addEventListener("click", switchLanguage);
jpButton.addEventListener("click", switchLanguage);

renderSidebar(LANGUAGES.VIETNAM, productsVietnam);
renderProducts(productsVietnam);

function renderSidebar(language, products) {
  // Update static links
  document.querySelector('[data-key="home"]').textContent =
    translations.home[language];
  document.querySelector('[data-key="categories"]').textContent =
    translations.categories[language];

  const categoriesList = document.getElementById("categories-list");
  categoriesList.innerHTML = "";

  const categories = Object.keys(products);
  categories.forEach((category) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.className = "sidebar__dropdown-link";
    a.textContent = category;
    li.appendChild(a);
    categoriesList.appendChild(li);
  });
}

function renderProducts(data) {
  const container = document.getElementById("productSections");

  container.innerHTML = "";

  for (const category in data) {
    const products = data[category];
    const section = document.createElement("section");
    section.innerHTML = `
      <h1>${category}</h1>
      <div class="products">
        ${products
          .map(
            (product) => `
          <div class="product">
            <img src="images/${product.image}.${product.extension}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <h4>${product.price}</h4>
          </div>
        `
          )
          .join("")}
      </div>
    `;
    container.appendChild(section);
  }
}
