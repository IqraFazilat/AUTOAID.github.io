// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}



// JavaScript code for pagination
document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll("#product1 .pro");
  const itemsPerPage = 8;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Current page index
  let currentPage = 1;

  // Function to show products based on page number
  function showPage(page) {
    // Hide all products
    products.forEach((product, index) => {
      product.style.display = "none";
    });

    // Calculate the range of products to show
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Show products for the current page
    products.forEach((product, index) => {
      if (index >= start && index < end) {
        product.style.display = "block";
      }
    });

    // Update active page in pagination
    document.querySelectorAll("#pagination a").forEach((a) => {
      a.classList.remove("active");
    });
    document
      .querySelector(`#pagination a[data-page="${page}"]`)
      .classList.add("active");
  }

  // Function to create pagination buttons dynamically
  function createPagination() {
    const paginationContainer = document.querySelector("#pagination");
    paginationContainer.innerHTML = "";

    // Create pagination links
    for (let i = 1; i <= totalPages; i++) {
      const a = document.createElement("a");
      a.textContent = i;
      a.setAttribute("href", "#");
      a.setAttribute("data-page", i);

      // Add event listener to pagination button
      a.addEventListener("click", function (e) {
        e.preventDefault();
        const page = parseInt(this.getAttribute("data-page"));
        currentPage = page;
        showPage(currentPage);
      });

      paginationContainer.appendChild(a);
    }

    // Add next arrow if there are more than 1 page
    if (totalPages > 1) {
      const nextArrow = document.createElement("a");
      nextArrow.innerHTML = '<i class="fal fa-long-arrow-alt-right"></i>';
      nextArrow.setAttribute("href", "#");

      nextArrow.addEventListener("click", function (e) {
        e.preventDefault();
        if (currentPage < totalPages) {
          currentPage++;
          showPage(currentPage);
        }
      });

      paginationContainer.appendChild(nextArrow);
    }
  }

  // Initialize pagination
  createPagination();
  showPage(1);
});
