//Importación de librerias y declaración de variables

import fs from 'fs';

export default class ProductManager {
    constructor() {
        this.path = './products/files/productos.json';
    }

    getProducts = async () => {
        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            if (data.trim() === '') {
                return []; // Devuelve un array vacío si el archivo está vacío
            }
            const users = JSON.parse(data);
            return users;
        }
        return []; // Devuelve un array vacío si el archivo no existe
    }

    addProduct = async (user) => {
        const users = await this.getProducts();
        if (users.find(product => product.code === user.code)) {
            throw new Error("El producto ya existe"); // Lanza un error si el producto ya existe
        }

        if (users.length === 0) {
            user.id = 1;
        } else {
            user.id = users[users.length - 1].id + 1;
        }

        users.push(user);

        await fs.promises.writeFile(this.path, JSON.stringify(users, null, '\t'));

        return user; // Retorna el producto recién agregado
    }

    getProductById = async (searchById) => {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        const products = JSON.parse(data);
        const Existe = products.find(p => p.Id === searchById);
        if (Existe) {
            return products;
        } else {
            console.log("No existe un producto con el ID");
        }
    }

    deleteProduct = async (_id) => {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        const productos = JSON.parse(data);
        let res = productos.filter(pr => pr.Id != _id);
        const cartJson = JSON.stringify(res)
        await fs.promises.writeFile(this.path, cartJson);
        return res;
    }
}