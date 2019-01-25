const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()
const cr = require('./controller')

const app = express();
app.use( bodyParser.json() );

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));

app.get('/api/inventory', cr.getInventory)
app.post('/api/product', cr.addProduct)
app.delete('/api/product/:id', cr.deleteProduct)


app.listen(4000,()=>{
    console.log('we are here on 4000');
    
})