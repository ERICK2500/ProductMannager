import ProductManager from './products/ProductManager.js';

const productManager = new ProductManager();

// Definir una función para ejecutar el contexto
const context = async () => {
    const test = await productManager.getProducts();
    console.log(test);
    let productTest = {
        title: 'producto prueba 5',
        description: 'Este es un producto prueba 5',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'abc12345',
        stock: 25
    }

    await productManager.addProducts(productTest);

    const newUsers = await productManager.getProducts();
    console.log(newUsers);

    const busquedaPorId = await productManager.getProductById(1);

    console.log(busquedaPorId)
    await productManager.updateProduct(1, 'title', 'Producto de prueba editado')
    console.log(await productManager.getProductById(1));
    await productManager.deleteProduct(1);

}

context();