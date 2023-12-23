import fs from 'fs';

export default class ProductManager {
    constructor(path) {
        this.path = path;
    }

    getProducts = async () => {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const products = JSON.parse(data);
                return products;
            } else {
                throw new Error("El archivo no existe en la ubicación especificada: " + this.path);
            }
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            throw error;
        }
    }

    addProducts = async (product) => {
        try {
            const products = await this.getProducts();
            if (products.find(p => p.code === product.code)) {
                throw new Error("El producto ya existe"); // Lanza un error si el producto ya existe
            }
            if (products.length === 0) {
                product.id = 1;
            } else {
                product.id = products[products.length - 1].id + 1;
            }
            products.push(product);
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
            return product; // Retorna el producto recién agregado
        } catch (error) {
            console.error("Error al agregar el producto:", error);
            throw error;
        }
    }
    getProductById = async (searchById) => {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const products = JSON.parse(data);
            const product = products.find(p => p.id === searchById);

            if (product) {
                return product;
            } else {
                throw new Error("El producto no existe");
            }
        } catch (error) {

            console.error("Error al obtener el producto:", error);
            throw error;
        }
    }

    deleteProduct = async (_id) => {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const products = JSON.parse(data);
            const index = products.findIndex(product => product.id === _id);

            if (index === -1) {
                throw new Error("El producto no existe");
            }
            products.splice(index, 1);
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            throw error;
        }
    }

    updateProduct = async (_id, attribute, value) => {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const products = JSON.parse(data);
            const product = products.find(p => p.code === _id);

            if (!product) {
                throw new Error("El producto no existe");
            }

            product[attribute] = value;

            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
            throw error;
        }
    }
}