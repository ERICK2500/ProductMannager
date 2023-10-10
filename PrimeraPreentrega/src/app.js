import express from 'express';
import router from "./routes/product.router.js"
import routers from "./routes/cart.router.js"
import __dirname from './utill.js';
import handlebars from 'express-handlebars';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/public'))
app.use('/api/carts', routers);
app.use('/api/products', router);
app.use('/assets', express.static('assets'));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    // Aquí renderizas la vista 'addproduct'
    res.render('home');
});

// app.get('/api/products/addproducts', (req, res) => {
//     // Aquí renderizas la vista 'addproduct'
//     res.render('addProducts');
// });

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

router.post('/api/products', (req, res) => {
    // Aquí puedes manejar la solicitud POST, procesar los datos y responder
    res.send('Solicitud POST recibida en la raíz de la aplicación');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno en el servidor' });
});

