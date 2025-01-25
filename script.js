import productData from "./products.js";

// Function to fetch and render categories and products
function renderProductSections() {
  const container = document.getElementById("productSections");

  try {
    // Fetch the JSON data

    console.log(productData);

    // Loop through each category
    // categories.forEach((category) => {
    //   // Create a section element
    //   const section = document.createElement("section");
    //   section.id = category.category.toLowerCase().replace(/\s+/g, "-");
    //   section.innerHTML = `
    //       <div class="container">
    //         <div class="smartphone-header">
    //           <div class="row">
    //             <div class="col-md-6">
    //               <h1>${category.category}</h1>
    //             </div>
    //             <div class="col-md-6 text-right">
    //               <!-- Optional link to see all -->
    //             </div>
    //           </div>
    //         </div>
    //         <div class="row justify-content-center">
    //           ${category.products
    //             .map((product) => {
    //               return `
    //                 <div class="col-md-4">
    //                   <div class="card text-center" style="width: 18rem; border:none;">
    //                     <img src="${product.image}" class="card-img-top" alt="${product.title}">
    //                     <div class="card-body">
    //                       <h5 class="card-title"><b>${product.title}</b></h5>
    //                       <p class="card-text">${product.description}</p>
    //                       <h5><b>${product.price}</b></h5>
    //                       <a href="#" class="btn smartphone-btn">BUY NOW
    //                         <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //                           <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
    //                           <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
    //                         </svg>
    //                       </a>
    //                     </div>
    //                   </div>
    //                 </div>
    //               `;
    //             })
    //             .join("")}
    //         </div>
    //       </div>
    //     `;

    //   // Append the section to the container
    //   container.appendChild(section);
    // });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Call the function to render sections
renderProductSections();
