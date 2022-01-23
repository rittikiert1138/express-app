const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('<h1>Welcome to express app 1.5</h1>')
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
        }
    ])
})

app.listen(3000,() => console.log('App running on port 3000'))