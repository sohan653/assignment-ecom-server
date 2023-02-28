const mongoose=require('mongoose');

const dataSchema= mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    fisrtName:{
        type: String,
        trim: true,
        required: true,
    },
    lastName:{
        type: String,
        trim: true,
        required: true,
    },
   
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64,
      },
},  { timestamps: true,versionKey:false })

const User=mongoose.model("User",dataSchema);

module.exports=User;