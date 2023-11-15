import fs from 'fs';
import __dirname from '../../../utill.js';
export default class ProductManager {
    constructor(path) {
        this.path = path;
        this.deletedIdsPath = `${__dirname}/dao/products/files/deletedID.json`;
        this.deletedIds = [];

        try {
            fs.accessSync(this.path, fs.constants.R_OK | fs.constants.W_OK);
        } catch (err) {
            fs.writeFileSync(this.path, JSON.stringify([], null, '\t'));
        }

        try {
            if (!fs.existsSync(this.deletedIdsPath)) {
                fs.writeFileSync(this.deletedIdsPath, JSON.stringify([], null, '\t'));
            }

            const deletedIdsData = fs.readFileSync(this.deletedIdsPath, 'utf-8');
            if (deletedIdsData) {
                this.deletedIds = JSON.parse(deletedIdsData);
            }
        } catch (error) {
            console.error("Error al acceder o crear el archivo deletedID.json:", error);
        }
    }

    getProducts = async (limit) => {
        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const products = JSON.parse(data);

            if (limit) {
                
                return products.slice(0, limit);
            }

            return products;
        }
        return [];
    }
    generateUniqueId(products, deletedIds) {
        // Obtén los IDs existentes en los productos
        const existingIds = products.map(product => product.id);

        // Combina los IDs existentes con los IDs eliminados
        const allIds = existingIds.concat(deletedIds);

        // Encuentra el ID más alto en uso
        const maxId = allIds.length > 0 ? Math.max(...allIds) : 0;

        // Busca el primer ID disponible, comenzando desde 1
        for (let newId = 1; newId <= maxId + 1; newId++) {
            if (!allIds.includes(newId)) {
                return newId;
            }
        }

        return maxId + 1; // En caso de que no haya IDs disponibles
    }

    addProduct = async (product) => {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const products = JSON.parse(data);

            if (products.some(p => p.code === product.code)) {
                throw new Error("El producto ya existe.");
            }

            const deletedIdsData = fs.readFileSync(this.deletedIdsPath, 'utf-8');
            const deletedIds = JSON.parse(deletedIdsData);

            product.id = this.generateUniqueId(products, deletedIds);
            products.push(product);

            // Eliminar el ID de la lista de IDs eliminados si existe
            const indexInDeleted = deletedIds.indexOf(product.id);
            if (indexInDeleted !== -1) {
                deletedIds.splice(indexInDeleted, 1);
            }

            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));

            return product;
        } catch (error) {
            console.error("Error al agregar el producto:", error);
            throw error;
        }
    }

    deleteProduct = async (_id) => {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const products = JSON.parse(data);

            const index = products.findIndex(product => product.id === parseInt(_id));

            if (index === -1) {
                throw new Error("El producto no existe");
            }

            const deletedProductId = products[index].id;

            // Agrega el ID del producto eliminado al array de deletedIds
            this.deletedIds.push(deletedProductId);

            // Actualiza el archivo deletedID.json con los IDs eliminados
            await fs.promises.writeFile(this.deletedIdsPath, JSON.stringify(this.deletedIds, null, '\t'));

            // Elimina el producto de la lista
            products.splice(index, 1);

            // Actualiza el archivo de productos
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));

            return { message: "Producto eliminado con éxito" };
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
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



    updateProduct = async (productId, newData) => {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const products = JSON.parse(data);
            const productIndex = products.findIndex(p => p.code === productId);

            if (productIndex === 0) {
                console.error("Producto no encontrado para el ID:", productId);
                throw new Error("El producto no existe");
            }

            const updatedProduct = { ...products[productIndex], ...newData };
            products[productIndex] = updatedProduct;

            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));

            return updatedProduct;
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
            throw error;
        }
    }
}
