function searchProducts() {
    var input = document.getElementById('searchInput').value.trim().toLowerCase();
    var products = document.querySelectorAll('.tm-video-item');
    var matchingProducts = [];
    var nonMatchingProducts = [];

    for (var i = 0; i < products.length; i++) {
        var productNameElement = products[i].querySelector('h2');
        var productCategory = products[i].getAttribute('data-category');

        var productName = productNameElement ? productNameElement.innerText.trim().toLowerCase() : '';
        productCategory = productCategory ? productCategory.trim().toLowerCase() : '';

        // Splitta la stringa di input in termini singoli
        var inputTerms = input.split(/\s+/);

        // Verifica se ogni termine di input è incluso nel nome del prodotto o nella categoria
        var matchProductName = inputTerms.every(function(term) {
            return productName.includes(term);
        });

        var matchProductCategory = inputTerms.every(function(term) {
            return productCategory.includes(term);
        });

        if (matchProductName || matchProductCategory) {
            matchingProducts.push(products[i]);
        } else {
            nonMatchingProducts.push(products[i]);
        }
    }

    // Nascondi tutti gli elementi
    products.forEach(function(product) {
        product.style.display = "none";
    });

    // Mostra solo gli elementi che corrispondono alla ricerca
    matchingProducts.forEach(function(product) {
        product.style.display = "block";
    });

    // Posiziona gli elementi corrispondenti nella griglia
    var container = document.querySelector('.tm-gallery');
    matchingProducts.forEach(function(product) {
        container.appendChild(product);
    });
}