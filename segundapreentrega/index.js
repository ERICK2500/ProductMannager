import ProductManager from './products/ProductManager.js';

// Ruta del archivo JSON
const filePath = './products/files/productos.json';

const productManager = new ProductManager(filePath);

// Definir una función para ejecutar el contexto
const context = async () => {
    const test = await productManager.getProducts();
    console.log(test);
    let productTest = {
        title: 'producto prueba 7',
        description: 'Este es un producto prueba 7',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'abc1234567',
        stock: 25
    }

    // await productManager.addProducts(productTest);

    // const newUsers = await productManager.getProducts();
    // console.log(newUsers);

    // const busquedaPorId = await productManager.getProductById(1);

    // console.log(busquedaPorId)
    await productManager.updateProduct('abc123', 'description', 'Producto de prueba editado 1')
    // console.log(await productManager.getProductById(1));
    // await productManager.deleteProduct(1);

}

context();