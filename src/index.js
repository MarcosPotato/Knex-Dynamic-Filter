const express = require('express')

const app = express()

app.use(express.json())
app.listen(9658, () => console.log('Server started !!!!'))