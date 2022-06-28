// console.log('May Node be with you')
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://yoda:theforce@cluster0.875lldc.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
    if (err) return console.log(err)
    console.log('Connected to Database')
})

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true}))


app.listen(3000, function() {
    console.log('listening on 3000')
})

// We normally abbreviate `request` to `req` and `response` to `res`.

// pre-ES6
// app.get('/', function(req,res){
//     // do something here
//     res.send('Hello World')
// })

// ES6
// app.get('/', (req, res) => {
//     res.send('Hello World')
// })


// All your handlers here...
// app.get('/', (req, res) => {})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
})

// console.log(__dirname)

// app.post('/quotes', (req, res) => {
//     console.log('Helloooooooooooooo!')
// })

app.post('/quotes', (req, res) => {
    console.log(req.body)
})