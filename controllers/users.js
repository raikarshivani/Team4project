var user= require('../models/Users');

exports.postLogin=function(req,res){
    for(var i=0;i<=userSchema.user.length ;i++)
    {
        if((req.body.username==user.username)&&(req.body.password==user.password))
            res.render('home');
        else
            res.render('errLogin');
    }
    
}

exports.signup=function(req,res){
    res.render('signup');
}

exports.postSignup=function(req,res){
    var user=new user();
    user.name =req.body.name;
    user.username =req.body.username;
    user.email =req.body.email;
    user.password =req.body.password;
    user.categories=req.body.categories;
    user.save();
}

