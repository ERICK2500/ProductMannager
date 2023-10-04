class ProductManager {

    constructor() {
        this.products = [];
    };
    // metodos
    addProducts = ({ title, description, price, thumbnail, code, stock }) => {

        // valido que vengan todos los datos por parametro
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.info("Debe incluir todos los parametros.")
            return;
        }

        // valido que el code no exista previamente
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

// creo mi instancia del product 1
const product1 = new ProductManager()

// creo un objeto de testeo para los metodos
const testProduct = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
}

// invoco metodos para controlar el resultado
product1.getProducts() // muestra el array vacio creado en el constructor
product1.addProducts(testProduct); // agrega correctamente el producto al array
product1.getProducts() // muestra el array con el primer producto agregado
product1.addProducts(testProduct); // devuelve error porque ya existe el code cargado previamente
product1.getProductById();  // devuelve error al no enviar el parametro de busqueda
product1.getProductById(1); // si encuentra el 1, por ende muestra el objeto
product1.getProductById(2); // no encuentra el 1, por ende no hace nada

