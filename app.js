var express=require("express");
var app=express();
var ejs=require("ejs");
var passport=require("passport");
var session=require("express-session");
var bodyParser=require("body-parser");
var urlencodedParser=bodyParser.urlencoded({extended:false});
var cookieParser=require("cookie-parser");
var LocalStrategy   = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
var routes=require("./routes/route");


//session and authentication
app.use(session({
    secret:"secret session"
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


//database setup
var mongoose=require("mongoose");
mongoose.connect("mongodb://cog:cog@ds233238.mlab.com:33238/cog");
//register schema
var schema=new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    score:String,
    pass:String
});
var users=mongoose.model("registers",schema);



app.set("view engine","ejs");
app.use(bodyParser.json());
app.use("/",express.static("public"));

//calling functions
routes(app,urlencodedParser,users,session);

//port setup
app.listen(3000,function(){
    console.log("Listening to port 3000...");
})
