var cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    var cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
    cart.forEach((product, index) => {
        var productDiv = document.createElement('div');
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeFromCart(index);
        productDiv.textContent = `${product.name} - ${product.store} - R$ ${product.price.toFixed(2)}`;
        productDiv.appendChild(removeButton);
        cartItemsContainer.appendChild(productDiv);
    });
}

function finalizePurchase() {
    let baseUrl = "https://api.whatsapp.com/send?phone=+5593984111006&text=";
    let message = "Olá, gostaria de finalizar o seguinte pedido:\n" + cart.map(product => `${product.store} - ${product.name} - R$ ${product.price.toFixed(2)}`).join("\n");
    window.open(baseUrl + encodeURIComponent(message), '_blank');
}

function searchProducts() {
    var searchQuery = document.getElementById('searchInput').value.toLowerCase();
    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    var products = [
        { name: 'Feijão', store: 'Loja CDM', price: 43.00, image: 'feijao.png' },
        { name: 'Feijão', store: 'Loja MAIS VC', price: 54.93, image: 'feijao.png' }
    ];

    var foundProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));

    if (foundProducts.length > 0) {
        foundProducts.sort((a, b) => a.price - b.price);
        foundProducts.forEach(product => {
            var productDiv = document.createElement('div');
            productDiv.classList.add('product');
            var productName = document.createElement('p');
            productName.textContent = 'Produto Encontrado:';
            var productImage = document.createElement('img');
            productImage.src = product.image;
            var storeInfo = document.createElement('p');
            storeInfo.textContent = `Na loja ${product.store} - ${product.name} R$ ${product.price.toFixed(2)}`;
            var addButton = document.createElement('button');
            addButton.textContent = 'Adicionar ao Carrinho';
            addButton.onclick = () => addToCart(product);
            productDiv.appendChild(productName);
            productDiv.appendChild(productImage);
            productDiv.appendChild(storeInfo);
            productDiv.appendChild(addButton);
            resultsContainer.appendChild(productDiv);
        });
    } else if (searchQuery.length > 0) {
        resultsContainer.textContent = 'O produto não foi encontrado em parceiros externos.';
    }
}

function toggleCartVisibility() {
    var cartDiv = document.getElementById('cart');
    cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
}
