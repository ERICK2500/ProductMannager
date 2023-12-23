import { Router } from 'express';
import ProductManager from '../dao/mongo/managers/products.js';
import __dirname from '../utill.js';
import path from 'path';


const routerV = Router();
const filePath = path.resolve(
    __dirname,
    'dao',
    'fileSystem',
    'products',
    'files',
    'productos.json'
);

const pm = new ProductManager(filePath);

routerV.get('/', async (req, res) => {
    try {
        const products = await pm.getProducts()
        console.log(products);
        res.render("home", { valueReturned: products })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ err })
    }

})

routerV.use('/realTimeProducts', (req, res) => {
    res.render('realTimeProducts', {})
})

export default routerV