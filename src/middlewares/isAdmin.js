const User = require("../models/users/userModel");
exports.isAdmin = async (req, res, next) => {

    try {

        const user = await User.findOne({email:req.headers['email']});

        if (user.role ==='admin') {
            next();
        } else {

            return res.status(401).send("Unauthorized admin");
        }
    } catch (err) {
        console.log(err);
    }
};

