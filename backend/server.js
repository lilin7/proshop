// entry point for server

const express = require('express') //common js
const products = require('./data/products')

const app = express()

// to be able to see text in server http://localhost:5000
app.get('/', (req, res) => {
    res.send('API is running...')
})

//to get all products info (in json)
//e.g. http://localhost:5000/api/products
app.get('/api/products', (req, res) => {
    res.json(products)
})

//to get a single product info (in json)
//e.g. http://localhost:5000/api/products/1
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p=>p._id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log("Server running on port 5000"))


