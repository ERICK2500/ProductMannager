import ProductManager from './products/ProductManager.js';

const productManager = new ProductManager();

// Definir una función para ejecutar el contexto
const context = async () => {
    let productTest = {
        title: 'producto prueba',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'abc123',
        stock: 25
    }

    await productManager.addProduct(productTest);

    const newProduct = await productManager.getProducts(); // Asigna el resultado a newProduct

    console.log(newProduct);
    console.log("***********************************************");

    const busquedaPorId = await productManager.getProductById(1);
    console.log(busquedaPorId);

    console.log("***********************************************");

    const newProducts = await productManager.deleteProduct(1);

    console.log(newProducts);
    console.log("***********************************************");
}

// Llama a la función context para ejecutarla
context();