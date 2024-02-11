//#region Requires
const express = require('express');
const app = express();
const PORT = process.env.PORT || 7004;
const bodyParser = require('body-parser')
const path = require('path')

// #endregion

//#region MW
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//#endregion

//#region End Points
const OrderRouter = require('./Routes/OrderRouter')
const ProductRouter = require('./Routes/ProductRouter')
app.use('/orders',OrderRouter)
app.use('/products',ProductRouter)

//#endregion

//#ServerListenRegion
app.listen(PORT, ()=>{
    console.log(`App is Listening on http://localhost/${PORT} or at ${process.env.RENDER_EXTERNAL_URL}`)
})