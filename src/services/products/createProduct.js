const { default: slugify } = require('slugify');
const cloudinary = require('cloudinary').v2;
const createProductService=async(request,Model)=>{

    try {
        const file =request?.files?.photo;
        if(!file){
            return {status:"fail",data:"please upload a photo"}
        }

        const hostedPhoto= await cloudinary.uploader.upload(file.tempFilePath);


        const product=await Model.create({...request.body,slug:slugify(request.body.name),photoUrl:hostedPhoto.url,photoId:hostedPhoto.public_id})

       return {status:"success",data:product}
    } catch (error) {
        return {status:"fail",data:error.message}
    }
}

module.exports=createProductService;