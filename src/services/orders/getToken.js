const braintree =require('braintree');

const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: "twqvm4h8367qfh8d",
    publicKey: "42nnpt35gkpjtmtn",
    privateKey: "69b41a8baa0b9f3bb76829d814d14ba8"
});

const getPaymentTokenService= async () => {
    try{
        const response=await gateway.clientToken.generate({})
        return {status: "success", data: response}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
};

const checkOutServices=async (req,model) => {
    try{
        const {id}=req.params
        const {nonce,totalPrice}=req.body;
       const data=await gateway.transaction.sale(
           {
               amount: totalPrice,
               paymentMethodNonce: nonce,
               options: {
                   submitForSettlement: true,
               },
           }
       )
        console.log(data)
       if(data.success){
           console.log(data)
           const updateOne=await model.findByIdAndUpdate(id,{isPay:"paid",orderStatus:"processing"},{new:true});
           if(updateOne){
               return {status: "success", data:data.transaction.id }
           }
       }

    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports={getPaymentTokenService,checkOutServices}