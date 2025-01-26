import productData from "./products.js";

function renderProducts(categories) {
  const container = document.getElementById("productSections");

  categories.forEach((category) => {
    const section = document.createElement("section");
    section.innerHTML = `
      <h1>${category.category}</h1>
      <div class="products">
        ${category.products
          .map(
            (product) => `
          <div class="product">
            <img src="${product.image}" alt="${product.title}">
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
  });
}

renderProducts(productData);
