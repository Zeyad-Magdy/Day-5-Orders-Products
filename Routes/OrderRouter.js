const express = require('express')
const Router = express.Router()
const OrderController = require('../Controllers/OrderController')

//#defining routes region
    Router.get('/', OrderController.GetAllOrders)
    Router.get('/:id', OrderController.GetOrderById)
    Router.put('/:id', OrderController.UpdateOrderById)
    Router.delete('/:id', OrderController.DeleteOrderById)
    Router.post('/add', OrderController.AddNewOrder)
    

//end region

module.exports = Router;