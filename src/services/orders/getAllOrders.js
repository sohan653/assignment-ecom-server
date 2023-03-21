const getAllOrderService= async (Request,DataModel) => {
    try{
        let data =await DataModel.aggregate([{$match:{}}])
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=getAllOrderService;