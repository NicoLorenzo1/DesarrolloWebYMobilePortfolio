import express, { Express, Request, Response } from 'express';
import { Product } from './productInterface';
import { cors } from 'cors';

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(cors())


const products: Product[] = [
    { id: 1, name: "Producto 1", price: 100, stock: 3, images: ['https://picsum.photos/200', 'https://picsum.photos/201', 'https://picsum.photos/202'] },
    { id: 2, name: "Producto 2", price: 70, stock: 1, images: ['https://picsum.photos/204', 'https://picsum.photos/205', 'https://picsum.photos/206'] },
    { id: 3, name: "Producto 3", price: 25, stock: 1, images: ['https://picsum.photos/207', 'https://picsum.photos/208', 'https://picsum.photos/209'] },
];

/**
 * Get all products
 */
app.get('/product', (req: Request, res: Response) => {
    res.send(products.map(x => ({ ...x, images: [x.images[0]] })));
});

/**
 * Get all the tasks for a given user.
 */
app.get('/product/:id', (req: Request, res: Response) => {
    const productId = Number(req.params.id);

    const product = products.filter(x => x.id === productId);

    if (product.length > 0) {
        res.send(product[0]);
    } else {
        res.status(404).send(console.error());
    }
});

app.listen(port, () => {
    // tslint:disable-next-line
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
