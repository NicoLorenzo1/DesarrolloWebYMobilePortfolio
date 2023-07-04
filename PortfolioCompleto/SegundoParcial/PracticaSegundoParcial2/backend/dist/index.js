"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorCodes_1 = require("./errorCodes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const products = [
    { id: 1, name: "Producto 1", price: 100, stock: 3, images: ['https://picsum.photos/200', 'https://picsum.photos/201', 'https://picsum.photos/202'] },
    { id: 2, name: "Producto 2", price: 70, stock: 1, images: ['https://picsum.photos/204', 'https://picsum.photos/205', 'https://picsum.photos/206'] },
    { id: 3, name: "Producto 3", price: 25, stock: 1, images: ['https://picsum.photos/207', 'https://picsum.photos/208', 'https://picsum.photos/209'] },
];
/**
 * Get all products
 */
app.get('/product', (req, res) => {
    res.send(products.map(x => (Object.assign(Object.assign({}, x), { images: [x.images[0]] }))));
});
/**
 * Get all the tasks for a given user.
 */
app.get('/product/:id', (req, res) => {
    const productId = Number(req.params.id);
    const product = products.filter(x => x.id === productId);
    if (product.length > 0) {
        res.send(product[0]);
    }
    else {
        res.status(404).send({ error: errorCodes_1.ErrorCodes.PRODUCT_NOT_FOUND });
    }
});
app.listen(port, () => {
    // tslint:disable-next-line
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map