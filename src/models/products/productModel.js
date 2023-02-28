const mongoose =require("mongoose");
const dataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 160,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
   
    quantity: {
      type: Number,
    },
   
    photoUrl:{
        type:String,
        required:true,
        
    },
      photoId:{
          type:String,
          required:true,

      },
    
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", dataSchema);
module.exports = Product;