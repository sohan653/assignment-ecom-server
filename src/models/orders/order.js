const mongoose=require('mongoose');

const dataSchema=mongoose.Schema({
    customerName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    productList:[{
        type:String,
        required:true
    }],
    totalPrice:{
        String,
    }
});

const Order=mongoose.model("Order",dataSchema)