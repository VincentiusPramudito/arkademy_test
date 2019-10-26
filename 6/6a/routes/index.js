const routes = require('express').Router()

const productRoutes = require('../controllers/product')
// const categoryRoutes = require('../controllers/category')
// const cashierRoutes = require('../controllers/cashier')

routes.use('/', productRoutes)
// routes.use('/category', categoryRoutes)
// routes.use('/cashier', cashierRoutes)

module.exports = routes