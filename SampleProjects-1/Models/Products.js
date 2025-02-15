const mongoose = require("mongoose");

const ProdSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    } ,

    category : {
        type : [] ,
        required : false ,
    } ,

    price : Number ,

    inStock : Boolean ,
    
    rating : {
        type : Number ,
        mx_rating : 5 , 
        min_rating : 1 ,
    } , 

    mfd_by : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Company'
    }
});

module.exports = mongoose.model('Products' , ProdSchema);

