const slugify=require('slugify')
const productUpdateService=async(req,model)=>{
    try {

        const updateProduct= await model.findByIdAndUpdate(req.params.id,{...req.body,slug:slugify(req.body.name)},{new:true})
        return {status:"success",data:updateProduct}
    } catch (error) {
        return {status:"failed",data:error.message}
    }
}
module.exports = productUpdateService;