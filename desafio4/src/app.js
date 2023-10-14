import express from 'express';
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



const server = app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

app.use('/', (req, res) => {
    res.redirect('/api/products');
});

const io = new Server(server);

io.on('connection', socket => {
    console.log('Nuevo cliente conectado')
});

