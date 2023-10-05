import { Router } from 'express';
import ProductManager from '../dao/products/managers/ProductManager.js';
import __dirname from '../utill.js';
import path from 'path';
import Swal from 'sweetalert2';

const router = Router();
const filePath = path.resolve(
    __dirname,
    'dao',
    'products',
    'files',
    'productos.json'
);

const productManagers = new ProductManager(filePath);

router.get('/', async (req, res) => {
    try {
        const { limit } = req.query;
        const products = await productManagers.getProducts();

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

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productManagers.getProductById(parseInt(id));

        if (product) {
            return res.status(200).json({ product });
        } else {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El producto no existe.'
            });

            return res.status(404).json({ error: 'El producto no existe.' });
        }
    } catch (error) {

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `Error al obtener el producto: ${error.message}`
        });

        return res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        // Obtener los datos del producto del cuerpo de la solicitud
        const { title, description, code, price, stock, category, thumbnails } = req.body;

        // Validar que los campos tengan los tipos correctos y cumplan con las restricciones
        if (typeof title !== 'string' ||
            typeof description !== 'string' ||
            typeof code !== 'string' ||
            typeof price !== 'number' ||
            typeof stock !== 'number' ||
            typeof category !== 'string' ||
            !Array.isArray(thumbnails) ||
            thumbnails.some(url => typeof url !== 'string')) {
            return res.status(400).json({ error: 'Los datos del producto no son válidos.' });
        }

        const product = {
            id: '',
            title,
            description,
            code,
            price,
            status: true,
            stock,
            category,
            thumbnails
        };
        const result = await productManagers.addProduct(product);

        return res.status(200).json({ result });
    } catch (error) {
        console.error("Error al agregar el producto:", error);
        return res.status(500).json({ error: error.message });
    }
});

router.put('/:pid', async (req, res) => {
    try {
        const { pid } = req.params; 
        const updatedData = req.body; 

        const result = await productManagers.updateProduct(pid, updatedData);

        res.status(200).json({ message: 'Producto Actualizado con éxito', data: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
export default router