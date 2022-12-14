const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/users',function(req,res,next){
    User.find({}).then(function(users){
        res.send(users);
    }).catch(next);
});


router.post('/users',function(req,res,next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});


router.delete('/users/:id',function(req,res,next){
    User.findOneAndDelete({_id: req.params.id}).then(function(user){
        res.send(user);
    });
});

module.exports = router;