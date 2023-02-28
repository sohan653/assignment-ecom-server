

const searchByCartService=async (req,model)=>{
    try {
        const ids = req.body.ids; // array of product IDs from req.body

     const products=await model.aggregate([
            {
                $match: {
                    _id: {
                        $in: ids.map(id => ObjectId(id))
                    }
                }
            }
        ])
      return {status:"success",data:products}
    }
    catch (e) {
    return {status:"failed",data:"something wrong"}
    }
}

module.exports = searchByCartService;