const listProductsService=async(req,model)=>{
    try {
        const products=await model.find({}).sort({createdAt:-1})
        return{status:"success",data:products}
    } catch (error) {
       return {status:"failed",data:error.message}
    }
}

module.exports = listProductsService();