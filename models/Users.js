var mongoose=require('mongoose');

var userSchema = new mongoose.Schema({
    id:String,
    name:String,
    username:String,
    password:String,
    categories:[String]
});
                                    
module.exports=mongoose.model('User',userSchema);
