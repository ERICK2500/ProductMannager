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
    const { cid } = req.params;
    const { pid, quantity } = req.body;

    try {
        // Cargar los datos del carrito desde el archivo JSON
        const cartData = fs.readFileSync(filePath, 'utf-8');
        const carts = JSON.parse(cartData);

        // Busca el carrito específico por su cartId
        const cart = carts.find(cart => cart.cartId === cid);

        if (!cart) {
            // Si el carrito no existe, créalo
            carts.push({ cartId: cid, products: [] });
        }

        const existingProduct = cart.products.find(product => product.productId === pid);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.products.push({ productId: pid, quantity });
        }

        // Guardar los cambios en el archivo JSON del carrito
        fs.writeFileSync(filePath, JSON.stringify(carts, null, '\t'));

        res.status(200).json(cart);
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        res.status(500).json({ error: error.message });
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
        const { title, description, code, price, stock, category, thumbnails } = req.body;

        // Agrega declaraciones console.log para depurar
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
            isNaN(price) || // Verificar si no es un número
            price <= 0 ||   // Verificar si es un número positivo

            typeof category !== 'string'
        ) {
            const invalidFields = [];

            if (typeof title !== 'string') invalidFields.push('title');
            if (typeof description !== 'string') invalidFields.push('description');
            if (typeof code !== 'string') invalidFields.push('code');
            if (isNaN(price) || price <= 0) invalidFields.push('price'); // Verificar precio
            if (typeof stock !== 'number' || stock <= 0) invalidFields.push('stock'); // Verificar stock
            if (typeof category !== 'string') invalidFields.push('category');
            return res.status(400).json({ error: 'Los siguientes campos son obligatorios y/o no son válidos:', invalidFields });
        }

        // Resto de la lógica para agregar el producto

        // Agregar el producto utilizando el método addProduct de productManagers
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

        // Envía una respuesta de éxito si todo está bien
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