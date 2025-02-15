const mongoose = require("mongoose");

const CompSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true , 
    } , 

    domain : {
        type : String , 
        required : true , 
    } , 

    hq_loc : {
        type : String , 
        required : true ,
    } , 
    
});

module.exports = mongoose.model("Company" , CompSchema);