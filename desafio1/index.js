class ProductManager {

    constructor() {
        this.products = [];
    };

    addProducts = ({ title, description, price, thumbnail, code, stock }) => {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.info("Debe incluir todos los parametros.")
            return;
        }

        const foundCode = this.products.find(e => e.code === code);
        if (foundCode) {
            console.info("El 'code' ya existe previamente")
            return;
        }

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        const id = this.products.length

        if (id === 0) {
            product.id = 1
        } {
            product.id = id + 1
        }
        this.products.push(product)
    };

    getProducts = () => {
        console.log(this.products)
    }

    getProductById = (searchId) => {

        if (!searchId) {
            console.error("Debe ingresar un ID de busqueda")
            return;
        }

        const foundId = this.products.find(e => e.id === searchId);
        if (!foundId) {
            console.info("Not found")
            return;
        }

        console.log(this.products[searchId - 1])
    }
};
const product1 = new ProductManager()
const testProduct = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
}

product1.getProducts()
product1.addProducts(testProduct);
product1.getProducts()
product1.addProducts(testProduct);
product1.getProductById();
product1.getProductById(1);
product1.getProductById(2);

