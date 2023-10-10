import { Router } from 'express';
import CartManager from '../dao/cart/managers/CartManager.js';
import __dirname from '../utill.js';
import path from 'path';
import Swal from 'sweetalert2';
import fs from 'fs'

const routers = Router();
const filePath = path.resolve(
    __dirname,
    'dao',
    'cart',
    'files',
    'carrito.json'
);

const cartManagers = new CartManager(filePath);


routers.get('/', async (req, res) => {
    try {
        const { limit } = req.query;
        const products = await cartManagers.getProducts();

        if (!limit) {
            return res.status(200).json({ products });
        }

        const limitValue = parseInt(limit);

        if (isNaN(limitValue)) {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El valor de "limit" debe ser un número válido.'
            });

            return res.status(400).json({ error: 'El valor de "limit" debe }ser un número válido.' });
        }

        const limitedProducts = products.slice(0, limitValue);
        return res.status(200).json({ limitedProducts });
    } catch (error) {

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `Error al obtener los productos: ${error.message}`
        });

        return res.status(500).json({ error: error.message });
    }
});


routers.post('/:cid/product/:pid', async (req, res) => {
    const { cid, pid } = req.params;
    const { quantity } = req.body;

    try {
        // Leer los datos del carrito desde el archivo JSON
        const cartData = fs.readFileSync(filePath, 'utf-8');
        const carts = JSON.parse(cartData);

        if (!carts[cid]) {
            // Si el carrito no existe, créalo
            carts[cid] = { products: [] };
        }

        const cart = carts[cid];
        const existingProduct = cart.products.find(product => product.productId === pid);

        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.products.push({ productId: pid, quantity });
        }

        fs.writeFileSync(filePath, JSON.stringify(carts, null, '\t'));

        res.status(200).json(cart);
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        res.status(500).json({ error: error.message });
    }
});

routers.get('/:cid', async (req, res) => {
    const { cid } = req.params;

    try {
        const products = await cartManagers.getProductsByCartId(cid);

        if (!products) {
            return res.status(404).json({ error: 'El carrito no existe' });
        }

        res.status(200).json(products);
    } catch (error) {
        console.error("Error al obtener los productos del carrito:", error);
        res.status(500).json({ error: error.message });
    }
});

export default routers