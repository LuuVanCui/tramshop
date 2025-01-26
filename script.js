import productData from "./products.js";

function renderProducts(data) {
  const container = document.getElementById("productSections");

  for (const category in data) {
    const products = data[category];
    console.log("🚀 ~ renderProducts ~ products:", products);
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

renderProducts(productData);
