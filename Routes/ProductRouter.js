const express = require('express')
const Router = express.Router()
const ProductRouter = require('../Controllers/ProductController')

//#defining routes region
    Router.get('/', ProductRouter.GetAllProducts)
    Router.get('/:id', ProductRouter.GetProductById)
    Router.put('/:id', ProductRouter.UpdateProductById)
    Router.delete('/:id', ProductRouter.DeleteProductById)
    Router.post('/add', ProductRouter.AddNewProduct)
    

//end region

module.exports = Router;