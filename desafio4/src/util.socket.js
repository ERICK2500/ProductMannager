import ProductManager from './dao/products/managers/ProductManager.js';
import path from 'path';
import __dirname from './utill.js';

const filePath = path.resolve(
    __dirname,
    'dao',
    'products',
    'files',
    'productos.json'
);
const pm = new ProductManager(filePath);

export default function socketProducts(socketServer) {
    socketServer.on('connection', async socket => {

        const sendProductsUpdate = async () => {
            const data = await pm.getProducts();
            socket.emit('products', { data });
        };

        // Enviar la lista de productos al cliente cuando se conecta
        sendProductsUpdate();

        socket.on('product', async data => {
            try {
                const valueReturned = await pm.addProduct(data);

                // Enviar un mensaje de éxito y actualizar la lista de productos
                socket.emit('message', valueReturned);
                sendProductsUpdate();
            } catch (err) {
                console.log(err);
            }
        });

        socket.on('delete', async data => {
            const result = await pm.deleteProduct(data);

            // Enviar el resultado de la eliminación y actualizar la lista de productos
            socket.emit('delete', result);
            sendProductsUpdate();
        });
    });
}
