// Importar módulos usando la sintaxis de módulos ES6
import express from 'express';
import ProductManager from './dao/products/managers/ProductManager.js';

const filePath = './dao/products/files/productos.json';
const productManagers = new ProductManager(filePath);

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

app.get('/', async (req, res) => {
    res.send(`<h1>Bienvenido</h1>`)
})

app.get('/products', async (req, res) => {
    try {
        const products = await productManagers.getProducts();
        res.json(products);
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.status(500).json({ error: "Error al obtener los productos" });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productManagers.getProductById(parseInt(id));

        if (product) {
            return res.status(200).json({ product });
        } else {
            return res.status(404).json({ error: 'El producto no existe.' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});