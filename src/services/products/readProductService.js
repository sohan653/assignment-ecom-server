const readProductService=async(req,model)=>{
    try {
        const product=await model.findOne({slug:req.params.slug});
        return {status:"success",data:product}
    } catch (error) {
        return {status:"failed",data:"something wrong"}
    }
}
module.exports = readProductService;