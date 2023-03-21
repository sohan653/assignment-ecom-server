const express =require('express');
const {registration, login, myProfile, updateProfile, checkAdmin, checkLogin} = require("../controllers/users/userControllers");
const {authVerify} = require("../middlewares/authVerify");
const {isAdmin} = require("../middlewares/isAdmin");
const {createProduct, listProducts, updateProduct, readProduct, searchByCart, deleteProduct, photoUpdate} = require("../controllers/products/productControllers");
const {createOrder, getMyOrder, getAllOrder, getOrderById, getPaymentToken, checkOut, getOrderByPay, deleteOrder,
    changeOrderStatus, } = require("../controllers/orders/orderControllers");

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
router.post('/photo-update/:id/:photoId',authVerify,isAdmin,photoUpdate)
router.delete('/delete-product/:id', authVerify,isAdmin,deleteProduct)

// orders
router.post('/create-order',authVerify,createOrder);
router.get('/my-orders',authVerify,getMyOrder);
router.get('/all-orders',authVerify,isAdmin,getAllOrder)
router.get('/all-orders/:id',authVerify,getOrderById);
router.get('/order/:value',getOrderByPay)
router.delete('/order/:id',authVerify,isAdmin,deleteOrder);
router.put('/order/:id',authVerify,isAdmin,changeOrderStatus)

// checkout
router.get('/get-payment-token',getPaymentToken)
router.post('/checkout/:id',checkOut)

module.exports=router