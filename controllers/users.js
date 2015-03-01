var mongoose = require('mongoose');
var express = require('express');

mongoose.connect('mongodb://localhost:27017/tweetnews/');
mongoose.connection.on('error',function(){
    console.error('MongoDb is not connected. Check if Mongod is running.');
});



var user= require('../models/Users');

exports.index= function(req,res){
    res.render('index',{
           title:"Welcome to tweetnews!"
    });
}

exports.checkUser = function(req,res){
    var userAcc = new user();
    usr.find(req.body.uses,function(err,user){
        if(err)
            res.send(err);
        for(var u in user)
        {
            if(req.body.uses == user[u].userid && req.body.pass == user[u].password){
                res.json(user[u].password);
            }
            else if(req.body.uses == user[u].userid && req.body.pass != user[u].password)
            {
                res.send("Invalid Password...");
                res.render('login');
            }
        }
    });
}


exports.postSignin=function(req,res){
    for(var u in user)
    {
        console.log("checkuser"+u);
        if((req.body.username==user[u].username)&&(req.body.password==user[u].password))
            res.render('home');
        else
            res.send('errLogin');
    }
    
}

exports.signup=function(req,res){
    res.render('signup');
}

exports.postSignup=function(req,res){
    var usr =new user();
    usr.name =req.body.name;
    usr.username =req.body.username;
    usr.email =req.body.email;
    usr.password =req.body.password;
    usr.save();
    res.render('postSignup');
}

