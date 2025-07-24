// index.js
const express = require('express')
const cors = require('cors')
const pool = require('./db')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products_it ORDER BY id')
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Database query error' })
  }
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server pornit pe http://localhost:${PORT}`)
})
