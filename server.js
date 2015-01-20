var express =require('express');
var app=express(); //creates server
var hbs= require('hbs');
var path= require('path');
var bodyParser= require('body-parser');
var mongoose=require('mongoose');

var usersController= require('./controllers/users');
var homeController= require('.//controllers/home');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',hbs.__express);//html to read files with deafult html extension
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/classpro/');
mongoose.connection.on('error',function(){
    console.error("Mongodb is not connected. Check if mongod is running")
    
});


app.get('/',homeController.index);
app.post('/',usersController.postLogin);
app.get('/signup',usersController.signup);
app.post('/signup',usersController.postSignup);
app.get('/user/:id',homeController.home);



app.listen(3000);