const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('<h1>Welcome to express app 1.5</h1>')
})

app.get('/products',(req,res) => {
    res.send([
        {
            productId: '101',
            productName: 'Yamaha 11'
        },
        {
            productId: '102',
            productName: 'Honda 22'
        }
    ])
})

app.listen(3000,() => console.log('App running on port 3000'))