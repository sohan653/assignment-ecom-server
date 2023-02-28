
const cloudinary = require('cloudinary').v2;
const photoUpdateService=async(req,model)=>{
    const photo=req.files.photo;
    try {
        // delete previous photo
       await cloudinary.uploader.destroy(req.params.photoId,async(err,result)=>{
            if (err){
                return {status:"failed",data:"failed to delete image"}
            }
            // update new photo
            await cloudinary.uploader.upload(photo.tempFilePath,(err,result)=>{
                if (err) {
                    return {status:"failed",data:"failed to upload image"}
                }
                if (result){
                    // filter & update
                    model.findOneAndUpdate(
                        {photoId:req.params.photoId},
                        {photoUrl:result.url,photoId:result.public_id},
                        {new:true}
                        ,
                        (err,product)=>{
                            if(!err)   { return {status:"success",data:product}}
                        })
                    ;
                }

            })
        })
    } catch (error) {
        return {status: "failed",data:"something wrong"}
    }
}

module.exports = photoUpdateService