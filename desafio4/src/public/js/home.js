import Swal from "sweetalert2";

const socket = io();

// Escuchar los eventos del servidor
socket.on('product', (products) => {
    // Actualizar la lista de productos en la interfaz gráfica
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    products.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.textContent = product.id;
        productContainer.appendChild(productElement);
    });
});


const error = '{{error}}';

if (error) {
    Swal.fire({
        title: 'Error',
        text: error,
        icon: 'error',
        confirmButtonText: 'Aceptar'
    });
}
