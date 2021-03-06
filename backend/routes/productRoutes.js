
import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public

router.get('/', asyncHandler(async(req, res) => {
    const products = await Product.find({}) //Product.find({}) returns a Promise object
    res.json(products)
}))

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public

router.get('/:id', asyncHandler(async(req, res) => {
    //const product = products.find(p=>p._id === req.params.id)
    const product = await Product.findById(req.params.id) //get id in url and pass here

    //check if there is this product
    if (product) { 
        res.json(product)
    } else { //if no such product, return error 404
        res.status(404).json({message: 'Product not found'})
    }

    res.json(product)
}))

export default router