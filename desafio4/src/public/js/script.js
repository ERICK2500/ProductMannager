const socket = io();

socket.on('connect', () => {
    console.log('Conexión exitosa al servidor WebSocket');
});


function renderProducts(products) {
    const productContainer = document.querySelector('.row');
    if (!productContainer) {
        console.error('El elemento row no se encontró en el DOM.');
        return;
    }

    productContainer.innerHTML = '';

    products.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price}</p>
            <p>Código: ${product.code}</p>
            <p>Stock disponible: ${product.stock}</p>
        `;
        productContainer.appendChild(productElement);
    });
}

fetch('/api/products', {
    headers: {
        'Accept': 'application/json'
    }
})

// Manejo de errores
const error = '{{error}}';

if (error) {

}
