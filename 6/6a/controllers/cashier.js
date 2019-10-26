const routes = require('express').Router()
const Model = require('../models')


routes.get('/', (req,res)=>{
    console.log('masuk')
    Model.Cashier.findAll()
    .then (data => {
            res.render('list', { value: data })
    })
    .catch(err =>{
        res.render(err)
    })
})

// routes.get('/register', (req,res)=>{
//     res.render('studentRegister')
// })

// routes.post('/register', (req,res)=>{
//     console.log(req.body)
//     Model.Student.create({
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email,
//         phone: req.body.phone,
//         password:req.body.password
//     })
//     .then(()=>{
//         res.redirect('/student/list')
//     })
//     .catch(err=>{
//         res.render(err)
//     })
// })

// routes.get('/list/delete/:id', (req,res)=>{
//     // console.log(req.params.id)
//     Model.Student.destroy({
//         where: {id : req.params.id}
//     })
//     .then(()=>{
//         res.redirect('/student/list')
//     })
//     .catch(err=>{
//         res.render(err)
//     })
// })

// routes.get('/list/edit/:id', (req,res)=>{
//     Model.Student.findByPk(req.params.id)
//     .then(data=>{
//         // console.log(data.dataValuess)
//         res.render('studentEdit', {student: data, id: req.params.id})
//     })
//     .catch(err=>{
//         res.render(err)
//     })
// })

// routes.post('/list/edit/:id', (req,res)=>{
//     Model.Student.update({
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email,
//         phone: req.body.phone,
//     },{
//         where: {id: req.params.id}
//     })
//     .then(()=>{
//         res.redirect('/student/list')
//     })
//     .catch(err =>{
//         res.render(err)
//     })
// })

module.exports = routes