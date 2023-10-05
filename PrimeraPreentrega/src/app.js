import express from 'express';
import router from "./routes/product.router.js"

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'))
app.use('/api/products', router);

app.get('/', async (req, res) => {
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});


