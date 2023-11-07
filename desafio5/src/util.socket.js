import ProductManager from './dao/mongo/managers/ProductManager.js';
import path from 'path';
import __dirname from './utill.js';

const filePath = path.resolve(
    __dirname,
    'dao',
    'fileSystem',
    'products',
    'files',
    'productos.json'
);
const pm = new ProductManager(filePath)

export default function socketProducts(socketServer) {
    socketServer.on('connection', async socket => {

        const data = await pm.getProducts()

        socket.emit('products', { data })

        socket.on('product', async data => {

            try {
                const valueReturned = await pm.addProduct(data)

                socket.emit('message', valueReturned)
            }
            catch (err) {
                console.log(err);
            }

        })

        socket.on('delete', async data => {

            const result = await pm.deleteProduct(data)

            socket.emit('delete', result)
        })

    })
}
