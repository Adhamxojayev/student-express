const express = require('express')
const { PORT } = require('./config.js')
const studentModul = require('./modules/index.js')
const cors = require('cors')

const app = express()

app.use( express.json() )
app.use( express.urlencoded({ extended: true}) )
app.use( cors() )


app.use( studentModul )


app.listen( PORT, () => { console.log(`server run http://localhost:${PORT}`) } )