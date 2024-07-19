import bodyParser from 'body-parser';
import express from 'express';

import enableCors from './middlewares/cors.js';
import { initDb } from './data/database.js';

const app = express();

app.use(bodyParser.json());

app.use(enableCors);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Foodeli means Food Delivery!' });
});

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found!' });
});

initDb()
  .then(() => app.listen(3000))
  .catch((error) => console.log('Connecting to the database failed!'));
