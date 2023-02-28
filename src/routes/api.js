const express =require('express');
const {registration, login, myProfile, updateProfile, checkAdmin, checkLogin} = require("../controllers/users/userControllers");
const {authVerify} = require("../middlewares/authVerify");
const {isAdmin} = require("../middlewares/isAdmin");
const router=express.Router();

// user api
router.post('/registration',registration);
router.post('/login',login);
router.get('/my-profile',authVerify,myProfile);
router.post('/update-profile',authVerify,updateProfile)
router.get('/check-admin',authVerify,isAdmin,checkAdmin)
router.get('/check-login',authVerify,checkLogin)


module.exports=router