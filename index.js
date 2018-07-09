const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 3000

const app = express()

app.use(bodyParser.json())
app.use(cors)

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})
