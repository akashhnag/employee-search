module.exports=function(app,urlencodedParser,users){
    console.log("routes included");
    app.get("/",function(req,res){
        res.render("index");
    })

    app.post("/login",urlencodedParser,function(req,res){
        users.find({email:req.body.email,pass:req.body.pass},function(err,data){
            if(err){throw err} 
            if(!data.length)
            {
              res.send("0");
            }
            else{
                res.send("1");
            } 
        })             
    })

    app.get("/dashboard",function(req,res){
        res.render("dashboard");
    })

    app.get("/dashboard/items",function(req,res){
        users.find({},function(err,data){
            if(err) throw err;
            res.json(data);
        })
    })

    app.post("/succcessRegister",urlencodedParser,function(req,res){
        users.find({email:req.body.email},function(err,data){
            if(err){throw err} 
            if(!data.length)
            {
                var new_user=users(req.body).save(function(err,data){
                    if(err) throw err;
                    res.send("1");
                })      
            }
            else{
                res.send("0");
            } 
        })             
    })

    app.get("/regSuccess",function(req,res){
        res.render("regSuccess");
    })
   
}