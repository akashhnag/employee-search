module.exports=function(app,urlencodedParser,users,session){
    console.log("routes included");
    var sess;
    app.get("/",function(req,res){
        sess=req.session;
        if(sess.email)
        {
            
        }
        else{
            res.render("index");
        }
        
    })

    app.post("/login",urlencodedParser,function(req,res){
        sess=req.session;
        sess.email=req.body.email;
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
        sess=req.session;
        if(sess.email){
            res.render("dashboard");
        }
        else{
            res.render("index");
        }
       
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

    app.get('/logout',function(req,res){
        req.session.destroy(function(err) {
          if(err) {
            console.log(err);
          } else {
            res.redirect('/');
          }
        });
        
        });
   
}