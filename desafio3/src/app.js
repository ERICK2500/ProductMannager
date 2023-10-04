
import express from 'express';
import ProductManager from './products/managers/ProductManager.js';

const filePath = './src/products/files/productos.json';

const productManager = new ProductManager(filePath);

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', async (req, res) => {
    res.send('<h1>Bienvenido</h1>');
})

app.get('/products', async (req, res) => {
    try {
        let { limit } = req.query;
        const products = await productManager.getProducts();

        // Parseo de 'limit' a número
        limit = parseInt(limit);

        if (isNaN(limit)) {
            // Si 'limit' no es un número o no se proporciona, se envían todos los productos
            return res.status(200).json({ products });
        }

        // Limita el número de productos según 'limit'
        const limitedProducts = products.slice(0, limit);

        return res.status(200).json({ limitedProducts });
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        return res.status(500).json({ error: "Error al obtener los productos" });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productManager.getProductById(parseInt(id));

        if (product) {
            return res.status(200).json({ product });
        } else {
            return res.status(404).json({ error: 'El producto no existe.' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});