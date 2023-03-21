const changeOrderStatusService= async (Request,DataModel) => {
    try{
        const {id}=Request.params;
        let PostBody=Request.body;


        let data = await DataModel.findByIdAndUpdate(id,PostBody,{new:true})
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=changeOrderStatusService;