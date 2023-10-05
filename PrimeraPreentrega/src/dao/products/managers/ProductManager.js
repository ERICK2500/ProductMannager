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

    async addProducts(product) {
        try {
            const products = await this.getProducts();

            // Verificar si el producto ya existe
            if (products.find(p => p.code === product.code)) {
                throw new Error("El producto ya existe");
            }

            // Generar un nuevo ID único
            product.id = this.generateUniqueId(products);

            // Agregar el producto y guardar en el archivo
            products.push(product);
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));

            return product;
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

    updateProduct = async (productId, newData) => {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const products = JSON.parse(data);
            const product = products.find(p => p.id === productId);
            if (!product) {
                throw new Error("El producto no existe");
            }
            for (const key in newData) {
                if (newData.hasOwnProperty(key)) {
                    product[key] = newData[key];
                }
            }
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
            return product;
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
            throw error;
        }
    }
}