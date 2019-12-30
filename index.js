const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const cors = require("cors")

let db = "mongodb://babastudio:bakmandi6@cluster0-shard-00-00-ufght.mongodb.net:27017,cluster0-shard-00-01-ufght.mongodb.net:27017,cluster0-shard-00-02-ufght.mongodb.net:27017/api_shop?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(db)


.then(db => console.log('db connected'))
.catch(err => console.log(err))

// s
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true,
    limit : "50mb"
})
)


let corsOptions = {
    origin: "*",
    methods: ["*"],
    allowedHeaders: ["Content-Type", "tokenshop"]
}

app.use(cors(corsOptions))

require('./router/router')(app)
const PORT = process.env.PORT || 8000

app.listen(PORT,() =>{
    console.log('Berhasil menjalankan server pada port 8000')
})