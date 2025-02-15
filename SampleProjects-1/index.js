const express = require("express");
const server = require("http");

const connectToDB = require('./config/db.js');

const Products = require('./Models/Products.js');

const app = express();

app.use(express.json());
connectToDB();


app.get('/' , (req , res) => {
    res.send("home page");
})

app.post('/add' , async (req , res) => {
    try{
        const newProd = req.body;
        if(!newProd){
            return res.status(404).json({
                success : false,
                message : "Invalid Product"
            });
        }
    
        const prod = await Products.create(newProd);

        // const prod = new Products(newProd);
        // await prod.save();
    
        return res.status(200).json({
            success : true,
            message : "Product added successfully!",
            data : prod,
        });
    }
    catch(error){
        console.log(error);
      return res.status(500).json({
        success : false,
        message : "Internal server error!",
      })
    }
})

const port = 3000;

app.listen(port , () => {
    console.log(`Server is now running at ${port} port`);
});