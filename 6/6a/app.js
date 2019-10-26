const express = require('express')
const routes = require('./routes/index')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', routes)
app.use(express.static(__dirname + '/public'));

app.listen(port, ()=>{
    console.log(`Listen to the port ${port}`)
})