var mongoose=require('mongoose');

var userSchema = new mongoose.Schema({
    id:String,
    name:String,
    username:String,
    email:String,
    password:String
});
                                    
module.exports=mongoose.model('User',userSchema);
