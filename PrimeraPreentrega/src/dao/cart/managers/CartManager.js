import fs from 'fs';

export default class CartManager {
    constructor(path) {
        this.path = path;
        // Verificar si el archivo existe y crearlo si es necesario
        if (!fs.existsSync(this.path)) {
            const initialData = { carts: [] };
            fs.writeFileSync(this.path, JSON.stringify(initialData, null, '\t'));
        }
    }

    async getCart(cartId) {
        try {
            let carts = [];

            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8');

                if (data) {
                    carts = JSON.parse(data).carts || [];
                }
            }

            let cart = carts.find(c => c.id === cartId);

            if (!cart) {
                // Si el carrito no existe, créalo
                cart = { id: cartId, products: [] };
                carts.push(cart);

                // Guardar los cambios en el archivo JSON
                await fs.promises.writeFile(this.path, JSON.stringify({ carts }, null, '\t'));
            }

            return cart;
        } catch (error) {
            console.error("Error al obtener el carrito:", error);
            throw error;
        }
    }

    readCartData = async () => {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                if (data) {
                    return JSON.parse(data);
                }
            }
            return [];
        } catch (error) {
            console.error("Error al obtener datos del carrito:", error);
            throw error;
        }
    }

    saveCartData = async (data) => {
        try {
            await fs.promises.writeFile(this.path, JSON.stringify(data, null, '\t'));
        } catch (error) {
            console.error("Error al guardar datos del carrito:", error);
            throw error;
        }
    }
    generateUniqueId(products) {
        const lastProductId = products.length > 0 ? products[products.length - 1].id : 0;
        return lastProductId + 1;
    }

    cartProduct = async (cartId, product) => {
        try {
            let carts = [];
            // Verificar si el archivo existe
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                if (data) {
                    carts = JSON.parse(data).carts || [];
                }
            }

            // Buscar el carrito por su ID
            let cart = carts.find(c => c.id === cartId);

            if (!cart) {
                // Si el carrito no existe, créalo
                cart = { id: cartId, products: [] };
                carts.push(cart);
            }

            // Buscar el producto en el carrito por su ID
            let existingProduct = cart.products.find(p => p.productId === product.productId);

            if (existingProduct) {
                // Si el producto ya existe, aumenta la cantidad
                existingProduct.quantity += product.quantity;
            } else {
                // Si el producto no existe, agrégalo al carrito
                cart.products.push(product);
            }

            const updatedData = { carts }; // Objeto que contiene los carritos
            await fs.promises.writeFile(this.path, JSON.stringify(updatedData, null, '\t'));

            return product;
        } catch (error) {
            console.error("Error al agregar el producto al carrito:", error);
            throw error;
        }
    }
}
