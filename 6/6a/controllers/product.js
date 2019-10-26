// const routes = require('express').Router()
// const Model = require('../models')


// routes.get('/', (req,res)=>{
//     console.log('masuk')
//     Model.Product.findAll()
//     .then (data => {
//             // res.render('list', { value: data })
//             console.log(data)
//     })
//     .catch(err =>{
//         res.render(err)
//     })
// })

// module.exports = routes

const routes = require('express').Router()
const Model = require('../models')


routes.get('/', (req,res)=>{
    console.log('masuk')
    Model.Product.findAll()
    .then (data => {
        console.log(data)
            // res.render('list', { value: data })
    })
    .catch(err =>{
        res.render(err)
    })
})

module.exports = routes