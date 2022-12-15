const express = require('express');
const bodyParser = require('body-parser');


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("DB connection successful");    
}).catch(err => {
    console.log('Connection error', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"Welcome to my user api."});
});

require('./app/routes/user.routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Listening on port 3000");
});