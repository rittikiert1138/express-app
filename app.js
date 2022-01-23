const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('<h1>Welcome to express app 1.1</h1>')
})

app.get('/product1',(req,res) => {
    res.send([
        {
            productId: '101',
            productName: 'Yamaha'
        },
        {
            productId: '102',
            productName: 'Honda'
        },
        {
            productId: '103',
            productName: 'Mazda'
        }
    ])
})

app.listen(3000,() => console.log('App running on port 3000'))