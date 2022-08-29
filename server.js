const express = require("express")
const knex = require('./config/DB_connection')
const app = express()


app.use(express.json())


app.use('/', require('./Router/department'))
app.use("/", require("./Router/categories"))
app.use('/', require('./Router/attribute'))
app.use("/",require("./Router/products"))
// app.use('/', require('./Router/products'))




const port = process.env.PORT || 8010


app.listen(port, () => {
    console.log(`Your server is running on: http://localhost:${port}`);
})

