
const getOrderByPayService= async (Request,DataModel) => {

    try{

        const {value}=Request.params;
        const payload={
            isPay:value
        }
        console.log(payload)
        let data =await DataModel.aggregate([{$match:payload}])
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=getOrderByPayService;