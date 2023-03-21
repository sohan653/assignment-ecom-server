const deleteOrderService= async (Request, Model) => {
    try{
        let DeleteID=Request.params.id;


        let QueryObject={};
        QueryObject['_id']=DeleteID;


        let Delete=  await Model.deleteMany(QueryObject)

        return {status: "success",Delete:Delete}

    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=deleteOrderService;