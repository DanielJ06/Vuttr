const express = require('express');
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://admin:admin06@cluster0-c5kw0.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

app.listen(3000, ()=> console.log('Running...'))