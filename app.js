import bodyParser from 'body-parser';
import express from 'express';

import { initDb } from './data/database.js';
import enableCors from './middlewares/cors.js';
import { default as productsRoutes } from './routes/products.routes.js';

const app = express();

app.use(bodyParser.json());

app.use(enableCors);

app.use('/products', productsRoutes);

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found!' });
});

initDb()
  .then(() => app.listen(3000))
  .catch((error) => console.log('Connecting to the database failed!'));
