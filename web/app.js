var express = require('express')
var app = express()
app.listen(2000)


var data = [
    {name: 'Latte', price: '80'},
    {name: 'Mocha', price: '90'},
    {name: 'Americano', price: '70'}
]
app.get('/data',showData)

function showData(req,res) {
    data.sort((a,b) => {return a.price-b.price})
    res.send(data)
}
console.log(data)