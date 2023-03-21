const mongoose=require('mongoose');

const dataSchema= mongoose.Schema({
    customerName:{
        type:String,
        required:true
    },
    UserEmail:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    productList:[{
        type:Object,
        required:true
    }],
    totalPrice:{
        type:Number
    },
    isPay:{
        type:String,
        enum:["paid","unpaid"],
        default:"unpaid"

    },
    show:{
        type:String,
        enum:[true,false],
        default: true
    },
    orderStatus:
        {
            type:String,
            enum:['accepted','processing' ,'shipped','delivered'],
            default:'accepted',
        }

},{timestamps:true,versionKey:false});

const Order=mongoose.model("Order",dataSchema);

module.exports=Order;