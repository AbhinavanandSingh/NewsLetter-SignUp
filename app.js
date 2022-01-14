const express=require("express");
const request=require("request");
const bodyParser=require("body-parser");

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
 var firstName=req.body.fname;
 var lastName=req.body.lname;
 var emailId=req.body.email;
 console.log(firstName,lastName,emailId);


})

app.listen(process.env.PORT || 3000 ,function(){
  console.log("OK 3000");
});
// api key- 17c930ed124115fec3117482defe1f75-us20
