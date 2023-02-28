const {createToken} = require("../../helpers/Users");
const userLoginService= async (Request,DataModel) => {
    try {
        let data =await DataModel.aggregate([{$match:Request.body}, {$project:{_id:0,email:1,firstName:1,lastName:1}}])
        if(data.length>0){
            let token = await createToken(data[0]['email']);
            return {status:"success",token:token,data:data[0]}
        }
        else {
            return {status:"unauthorized"}
        }
    }
    catch (error) {
        return {status: "fail", data: error.toString()}
    }
}
module.exports=userLoginService
