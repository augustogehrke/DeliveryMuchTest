const express = require('express')
const cors = require('cors')
const recipes = require('./src/routes/recipes')
const app = express()
const http = require('http')
app.use(cors())

app.use('/recipes', recipes)

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)

server.listen(port, () => console.log(`API DM started on port ${port}`))
