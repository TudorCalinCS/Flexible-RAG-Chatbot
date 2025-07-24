//node index.js

import express from 'express';
import cors from 'cors';
import pool from './db.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/products', async (req, res) => {
  const { search } = req.query;

  try {
    let result;
    if (search) {
      result = await pool.query(
        `SELECT * FROM tires
         WHERE LOWER(brand) LIKE $1
         OR LOWER(model) LIKE $1
         OR LOWER(description) LIKE $1
         OR LOWER(tire_type) LIKE $1
         OR LOWER(size) LIKE $1`,
        [`%${search.toLowerCase()}%`]
      );
    } else {
      result = await pool.query('SELECT * FROM tires');
    }

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/:slug', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'product.html'));
});

app.get('/product/:slug', async (req, res) => {
  const { slug } = req.params;

  try {
    const result = await pool.query('SELECT * FROM tires WHERE slug = $1', [slug]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Produsul nu a fost găsit' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});