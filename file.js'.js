
const productsContainer = document.getElementById("products");
const errorMessage = document.getElementById("error");

fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then(function(products) {
        productsContainer.innerHTML = "";

        products.forEach(function(product) {

            const card = document.createElement("div");
            card.className = "product-card";

            const image = document.createElement("img");
            image.className = "product-image";
            image.src = product.image;
            image.alt = product.title;

            const title = document.createElement("h2");
            title.textContent = product.title.slice(0, 60);

            const category = document.createElement("p");
            category.className = "category";
            category.textContent = product.category;

            const description = document.createElement("p");
            description.className = "description";
            description.textContent =
                product.description.slice(0, 120);

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(category);
            card.appendChild(description);

            productsContainer.appendChild(card);
        });
    })
    .catch(function(error) {
        errorMessage.textContent =
            "Error: " + error.message;

        productsContainer.innerHTML = "";
    })
    .finally(function() {
        console.log("API called");
    });
