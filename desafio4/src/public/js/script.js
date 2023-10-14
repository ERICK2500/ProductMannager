
const socket = io();

// Función para renderizar productos en la interfaz
function renderProducts(products) {
    const productContainer = document.getElementById('row');

    if (!productContainer) {
        console.error('El elemento product-list no se encontró en el DOM.');
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


fetch('/api/products')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Error al obtener los productos: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        renderProducts(data.products);
    })
    .catch((error) => {
        console.error(`Error al obtener los productos: ${error.message}`);
    });

socket.on('product', (products) => {
    renderProducts(products);
});

// Manejo de errores
const error = '{{error}}';

if (error) {

}