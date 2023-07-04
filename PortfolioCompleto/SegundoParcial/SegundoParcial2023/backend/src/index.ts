import express, { Express, Request, Response } from 'express';
import { ErrorCodes } from './errorCodes';
import cors from 'cors';
import { Business } from './Business';



const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(cors())

const businessList: Business[] = [{ businessName: "empresa1", web: "empresa1.com.uy", workers: 2 }, { businessName: "empresa2", web: "empresa2.com.uy", workers: 2 },
{ businessName: "empresa2", web: "empresa2.com.uy", workers: 2 }, { businessName: "empresa2", web: "empresa2.com.uy", workers: 2 }]


/**
 * Get all bussiness
 */
app.get('/bussines', (req: Request, res: Response) => {
  if (businessList.length > 0) {
    res.send(businessList);
  } else {
    res.status(404).send({ error: ErrorCodes.BUSINESS_NOT_FOUND });
  }
});

app.get('/business/:businessName', (req: Request, res: Response) => {
  if (businessList.length > 0) {
    res.send(businessList.filter(x => x.businessName === req.body));
  } else {
    res.status(404).send({ error: ErrorCodes.BUSINESS_NOT_FOUND });
  }
});



app.post('/business/post', (req: Request, res: Response) => {
  const newBusiness = req.body;
  businessList.push(newBusiness);

});

app.delete('/business/delete', (req: Request, res: Response) => {
  const newBusiness = req.body;
  const index = businessList.indexOf(newBusiness);

  if (index !== -1) {
    businessList.splice(index, 1);
    res.status(200).send('Business deleted successfully.');
  } else {
    res.status(404).send('Business not found.');
  }
});



app.listen(port, () => {
  // tslint:disable-next-line
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

