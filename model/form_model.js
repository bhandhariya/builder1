var mongoose=require('mongoose');
var FormSchema=new mongoose.Schema({
    heading1:{type:mongoose.Schema.Types.String},
    heading12:{type:mongoose.Schema.Types.String},
    name:{type:mongoose.Schema.Types.String},
    email:{type:mongoose.Schema.Types.String}
});

module.exports=mongoose.model('Form',FormSchema);