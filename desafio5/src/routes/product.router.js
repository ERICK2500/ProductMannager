import { Router } from 'express';
import ProductManager from '../dao/products/managers/ProductManager.js';
import __dirname from '../utill.js';
import path from 'path';


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
        const products = await productManagers.getProducts(limit);

        if (req.headers.accept === 'application/json') {

            res.json({ products });
        } else {

            res.render('home', { products });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
})


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productManagers.getProductById(parseInt(id));

        if (product) {
            res.render('realtimeproducts', { product });
        } else {
            res.render('realtimeproducts', { error: 'El producto no existe.' });
        }
    } catch (error) {
        res.render('realtimeproducts', { error: `Error al obtener el producto: ${error.message}` });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, description, code, price, stock, category, thumbnails } = req.body;


        // console.log('Datos recibidos en la solicitud:');
        // console.log('Title:', title);
        // console.log('Description:', description);
        // console.log('Code:', code);
        // console.log('Price:', price);
        // console.log('Stock:', stock);
        // console.log('Category:', category);
        // console.log('Thumbnails:', thumbnails);

        if (
            typeof title !== 'string' ||
            typeof description !== 'string' ||
            typeof code !== 'string' ||
            isNaN(price) ||
            price <= 0 ||

            typeof category !== 'string'
        ) {
            const invalidFields = [];

            if (typeof title !== 'string') invalidFields.push('title');
            if (typeof description !== 'string') invalidFields.push('description');
            if (typeof code !== 'string') invalidFields.push('code');
            if (isNaN(price) || price <= 0) invalidFields.push('price');
            if (typeof stock !== 'number' || stock <= 0) invalidFields.push('stock');
            if (typeof category !== 'string') invalidFields.push('category');
            return res.status(400).json({ error: 'Los siguientes campos son obligatorios y/o no son válidos:', invalidFields });
        }

        const result = await productManagers.addProduct({
            title,
            description,
            code: `ABC${code}`,
            price,
            stock,
            category,
            thumbnails: thumbnails ? [thumbnails] : ["Sin imagen"],
            status: true,
        });


        return res.status(200).json({ result });
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return res.status(500).json({ error: error.message });
    }
});

router.put('/:pid', async (req, res) => {
    try {
        const productId = Number(req.params.pid);
        const updatedData = req.body;

        const result = await productManagers.updateProduct(productId, updatedData);

        res.status(200).json({ message: 'Producto Actualizado con éxito', data: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:pid', async (req, res) => {
    try {
        const { pid } = req.params;

        const result = await productManagers.deleteProduct(pid);

        res.status(200).json({ message: 'Producto borrado con éxito', data: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
export default router

