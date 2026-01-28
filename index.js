
const express = require("express")

const cors = require("cors")
const app = express()

const username = "bharathi"
const password = 123

app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get("/login", function (req, res) {

    if (req.query.username === username & req.query.password == password) {
        res.send(true)
    }

    else {
        res.send(false)
    }
})
const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log("server started.......")
})