const mongoose=require('mongoose');

const dataSchema=mongoose.Schema({
    customerName:{
        type:String,
        required:true
    },
    UserEmail:{
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

const Order=mongoose.model("Order",dataSchema);

module.exports=Order;