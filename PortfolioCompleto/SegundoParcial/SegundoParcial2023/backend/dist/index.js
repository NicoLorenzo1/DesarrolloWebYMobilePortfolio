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
const businessList = [{ businessName: "empresa1", web: "empresa1.com.uy", workers: 2 }, { businessName: "empresa2", web: "empresa2.com.uy", workers: 2 },
    { businessName: "empresa2", web: "empresa2.com.uy", workers: 2 }, { businessName: "empresa2", web: "empresa2.com.uy", workers: 2 }];
/**
 * Get all bussiness
 */
app.get('/bussines', (req, res) => {
    if (businessList.length > 0) {
        res.send(businessList);
    }
    else {
        res.status(404).send({ error: errorCodes_1.ErrorCodes.BUSINESS_NOT_FOUND });
    }
});
app.get('/business/:businessName', (req, res) => {
    if (businessList.length > 0) {
        res.send(businessList.filter(x => x.businessName === req.body));
    }
    else {
        res.status(404).send({ error: errorCodes_1.ErrorCodes.BUSINESS_NOT_FOUND });
    }
});
app.post('/business/post', (req, res) => {
    const newBusiness = req.body;
    businessList.push(newBusiness);
});
app.delete('/business/delete', (req, res) => {
    const newBusiness = req.body;
    const index = businessList.indexOf(newBusiness);
    if (index !== -1) {
        businessList.splice(index, 1);
        res.status(200).send('Business deleted successfully.');
    }
    else {
        res.status(404).send('Business not found.');
    }
});
app.listen(port, () => {
    // tslint:disable-next-line
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map