
const getOrderByIdService= async (Request,DataModel) => {
    try{
        const {id}=Request.params
        let data =await DataModel.findById(id)
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=getOrderByIdService;