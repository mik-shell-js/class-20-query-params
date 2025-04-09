import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());

// log every request to the console
app.use((req, res, next) => {
  console.log('>', req.method, req.path);
  next();
});

// --- Change nothing above this line ---


// Connect to MongoDB
const client = new MongoClient('mongodb://localhost:27017');
const conn = await client.connect();
const db = conn.db('app');

app.get('/api/produce', async (req, res) => {
  const categoryName = req.query.category
  const countryName = req.query.country

  let filter = {}
  if (categoryName) {
    filter.category = categoryName;
  }
  if (countryName) {
    filter.country = countryName;
  }

  const produce = await db.collection('produce')
    .find(filter)
    .toArray();
  res.status(200).json(produce);
});

app.get('/api/produce/:id', async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const id = new ObjectId(req.params.id);
    const produce = await db.collection('produce').findOne({ _id: id });

    if (produce) {
      res.status(200).json(produce);
    } else {
      res.status(404).send()
    }
  } else {
    res.status(404).send();
  }
});


// --- Change nothing below this line ---

// 404 - not found
app.use((req, res, next) => {
  res.status(404).json({ message: 'resource ' + req.url + ' not found' });
});

// 500 - Any server error
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send()
});

// start server on port
app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}/`);
});
