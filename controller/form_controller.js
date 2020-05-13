var Form=require('../model/form_model');

exports.create=function(req,res,next){
var data=req.body;
var form=new Form({
    heading1:data.h1,
    heading12:data.h2,
    name:data.name,
    email:data.email
})
console.log(form)
res.send(form)
}