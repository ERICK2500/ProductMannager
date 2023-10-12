const socket = io();

// Escuchar los eventos del servidor
socket.on('products', (products) => {
    // Actualizar la lista de productos en la interfaz gráfica
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    products.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.textContent = product.title; // Aquí muestra el título, puedes mostrar otros datos como desees
        productContainer.appendChild(productElement);
    });
});