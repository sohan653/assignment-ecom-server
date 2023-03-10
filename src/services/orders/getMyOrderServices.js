const getMyOrderService= async (Request,DataModel) => {
    try{


        const email=Request.headers['email'];

            const payload={
                UserEmail:email
            }
            console.log(payload)
        let data =await DataModel.aggregate([{$match:payload}])
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=getMyOrderService;