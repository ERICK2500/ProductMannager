import express from 'express';
import path from 'path'; // Asegúrate de importar 'path'
import router from "./routes/product.router.js";
import routers from "./routes/cart.router.js";
import handlebars from 'express-handlebars';
import { Server } from 'socket.io'
import __dirname from './utill.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`))
app.use('/api/carts', routers);
app.use('/api/products', router);
app.use('/assets', express.static('assets'));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});


const server = app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

const io = new Server(server);

io.on('connection', socket => {
    console.log('Nuevo cliente conectado')
});
