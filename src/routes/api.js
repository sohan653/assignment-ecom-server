const express =require('express');
const {registration, login, myProfile, updateProfile, checkAdmin, checkLogin} = require("../controllers/users/userControllers");
const {authVerify} = require("../middlewares/authVerify");
const {isAdmin} = require("../middlewares/isAdmin");
const {createProduct, listProducts, updateProduct, readProduct, searchByCart, deleteProduct} = require("../controllers/products/productControllers");
const router=express.Router();

// user api
router.post('/registration',registration);
router.post('/login',login);
router.get('/my-profile',authVerify,myProfile);
router.post('/update-profile',authVerify,updateProfile)
router.get('/check-admin',authVerify,isAdmin,checkAdmin)
router.get('/check-login',authVerify,checkLogin);

//
// products api
router.post("/create-product",authVerify,isAdmin,createProduct)
router.get('/list-products',listProducts)
router.post('/update-product/:id',authVerify,isAdmin,updateProduct)
router.get('/read-product/:slug',readProduct)
router.get('/searchByCart',searchByCart)
router.delete('/delete-product/:id', authVerify,isAdmin,deleteProduct)


module.exports=router