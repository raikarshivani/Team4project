


exports.home= function(req,res){
    res.render('home',{
        title:"Home",
        
    });
    
}





exports.headlines= function(req,res){
    res.render('./categories/headlines',{});
}

exports.local= function(req,res){
    res.render('local',{});
}

exports.business= function(req,res){
    res.render('business',{});
}

exports.entertainment= function(req,res){
    res.render('entertainment',{});
}

exports.education= function(req,res){
    res.render('education',{});
}

exports.technology= function(req,res){
    res.render('technology',{});
}

exports.national= function(req,res){
    res.render('./categories/national',{});
}

exports.world= function(req,res){
    res.render('world',{});
}

exports.sports= function(req,res){
    res.render('sports',{});
}

