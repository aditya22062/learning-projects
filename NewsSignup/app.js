//jshint esverison:6
const express=require('express');
const request=require("request");
const bodyParser=require("body-parser")

const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
})
app.post("/",function(req,res){
    var fname=req.body.fname
    var lname=req.body.lname
    var email=req.body.email

    var data={
        lists:[
            {
                emai
            }
        ]
    }
    res.send("the name is "+fname+" "+lname+" "+"and email is"+" "+email)
})
app.listen(3000,function(){
    console.log("server is listening");
})


//Api key =432fd40d612bb94f89b5f63046f219e0-us14
//id=7c688948df.