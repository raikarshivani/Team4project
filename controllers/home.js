exports.index= function(req,res){
    res.render('index',{
           title:"Welcome to tweetnews!"
    });
}


exports.home= function(req,res){
    res.render('home',{
        title:"Home",
    });
}