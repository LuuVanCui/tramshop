export function renderProducts(products) {
  const container = document.getElementById("productSections");
  container.innerHTML = "";

  for (const category in products) {
    const section = createProductSection(category, products[category]);
    container.appendChild(section);
  }
}

function createProductCard(product) {
  return `
      <div class="product" onclick="openDialog()">
        <img src="images/${product.image}.${product.extension}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <h4>${product.price}</h4>
      </div>
    `;
}

function createProductSection(category, products) {
  const section = document.createElement("section");
  const sectionId = category.toLowerCase().replace(/\s+/g, "-");

  section.innerHTML = `
      <h1 id="${sectionId}">${category}</h1>
      <div class="products">
        ${products.map(createProductCard).join("")}
      </div>
    `;
  return section;
}
