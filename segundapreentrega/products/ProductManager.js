import fs from 'fs';

export default class ProductManager {
    constructor(path) {
        this.path = path;
    }

    getProducts = async () => {
        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const products = JSON.parse(data);
            return products;
        }
        return [];
    }

    addProduct = async (product) => {
        const products = await this.getProducts();
        if (products.find(p => p.code === product.code)) {
            throw new Error("El producto ya existe");
        }

        let maxId = 0;
        for (const product of products) {
            if (product.id > maxId) {
                maxId = product.id;
            }
        }

        product.id = maxId + 1;
        products.push(product);

        await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
        return product;
    }

    getProductById = async (searchById) => {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        const products = JSON.parse(data);
        const product = products.find(p => p.id === searchById);

        if (product) {
            return product;
        } else {
            throw new Error("El producto no existe");
        }
    }

    deleteProduct = async (_id) => {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        const products = JSON.parse(data);
        const index = products.findIndex(product => product.id === _id);

        if (index === -1) {
            throw new Error("El producto no existe");
        }

        products.splice(index, 1);
        await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
    }

    updateProduct = async (_id, attribute, value) => {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        const products = JSON.parse(data);
        const product = products.find(p => p.code === _id);

        if (!product) {
            throw new Error("El producto no existe");
        }

        product[attribute] = value;

        await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
    }
}