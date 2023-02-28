const cloudinary = require('cloudinary').v2;

const deleteProductService=async(req,model)=>{
    const id=req.params.id;

    try {
        const product=await model.findById(id);
        if(!product){
           return{status:"failed",data:"product not found"}
        }
        await cloudinary.uploader.destroy(product.photoId);
        const deleteProduct=await model.findByIdAndDelete(id)
       return {status:"success",data:"delete successfully"}


    } catch (error) {

    }
}

module.exports = deleteProductService;