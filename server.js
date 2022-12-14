const express = require('express');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb://localhost/');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(express.json());



app.use('/api',require('./routes/api'));


app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});


app.listen(3000, () => {
    console.log(`Server is listening on port ${3000}`)
})
