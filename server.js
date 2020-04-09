const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongobd://localhost:subscribe', { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err))

app.listen(3000, () => console.log('Server has started'))