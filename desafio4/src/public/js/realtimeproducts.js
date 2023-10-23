const socket = io();
const products = document.getElementById('products');
const formulario = document.getElementById('form');

const btnEliminar = () => {
    const botones = document.getElementsByClassName('btn-danger');
    const arrayBtn = Array.from(botones);

    arrayBtn.forEach(element => {
        element.addEventListener('click', () => {
            Swal.fire({
                title: '¿Deseas eliminar este producto?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Sí',
                denyButtonText: 'No',
                customClass: {
                    actions: 'my-actions',
                    cancelButton: 'order-1 right-gap',
                    confirmButton: 'order-2',
                    denyButton: 'order-3',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    socket.emit('delete', Number(element.id));
                } else {
                    Swal.fire('El producto no se ha eliminado', '', 'info');
                }
            });
        });
    });
};

socket.on('products', data => {
    let productos = '';
    data.data.forEach(producto => {
        productos += `<div class="card mb-3 mx-4 my-4" style="max-width: 20rem;">
                                <div class="card-header">Código: ${producto.code}</div>
                                <div class="card-body">
                                    <h4 class="card-title">${producto.title}</h4>
                                    <p class="card-text">
                                        <ul>
                                            <li>ID: ${producto.id}</li>
                                            <li>Descripción: ${producto.description}</li>
                                            <li>Precio: $${producto.price}</li>
                                            <li>Categoría: ${producto.category}</li>
                                            <li>Estado: ${producto.status}</li>
                                            <li>Stock: ${producto.stock}</li>
                                            <li>Thumbnail: ${producto.thumbnails}</li>
                                        </ul>
                                    </p>
                                </div>
                                <div class="d-flex justify-content-center mb-4">
                                    <button type="button" class="btn btn-danger" id="${producto.id}">Eliminar</button>
                                </div>
                            </div>`;
    });
    products.innerHTML = productos;
    btnEliminar();
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    data['status'] = new Boolean(data['status']);
    data['thumbnails'] = ['empty'];
    data['price'] = Number(data['price']);
    data['stock'] = Number(data['stock']);
    socket.emit('product', data);
    formulario.reset();
});

function updateProductsView(productsData) {
    const html = template({ products: productsData });
    const productsElement = document.getElementById('products');
    productsElement.innerHTML = html;
}

socket.on('products', data => {
    updateProductsView(data.data);
});

