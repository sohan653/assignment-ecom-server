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
        type:String
    },
    isPay:{
        type:String,
        enum:["paid","unpaid","cashOnDelivery"],
        default:"unpaid"

    }
});

const Order=mongoose.model("Order",dataSchema);

module.exports=Order;