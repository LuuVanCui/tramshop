import productsJapan from "./data/products_japan.js";
import productsVietnam from "./data/products_vi.js";

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

// Get the buttons by their IDs
const viButton = document.getElementById("lang-vi");
const jpButton = document.getElementById("lang-japan");

function switchLanguage(event) {
  viButton.classList.remove("active");
  jpButton.classList.remove("active");

  event.target.classList.add("active");

  const selectedProducts =
    event.target.id === "lang-vi" ? productsVietnam : productsJapan;
  renderProducts(selectedProducts);
}

viButton.addEventListener("click", switchLanguage);
jpButton.addEventListener("click", switchLanguage);

renderProducts(productsVietnam);
