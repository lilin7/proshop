// entry point for server

// const express = require('express') //common js
// const dotenv = require('dotenv')
// const products = require('./data/products')

import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
//import products from './data/products.js' //removed when using data from MongoDB
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

// to be able to see text in server http://localhost:5000
app.get('/', (req, res) => {
    res.send('API is running...')
})


//mount it
app.use('/api/products', productRoutes)


//when we can read from MongoDB, removed those parts, create folder "router" and move the function there
// //to get all products info (in json)
// //e.g. http://localhost:5000/api/products
// app.get('/api/products', (req, res) => {
//     res.json(products)
// })

// //to get a single product info (in json)
// //e.g. http://localhost:5000/api/products/1
// app.get('/api/products/:id', (req, res) => {
//     const product = products.find(p=>p._id === req.params.id)
//     res.json(product)
// })



const PORT = process.env.PORT || 5000 //use dotenv to import environment variable, if not defined, use 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))


