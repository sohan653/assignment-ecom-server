
const createService = require("../../services/common/createService");
const Order = require("../../models/orders/order");
const getMyOrderService = require("../../services/orders/getMyOrderServices");
const getAllOrderService = require("../../services/orders/getAllOrders");
const getOrderByIdService = require("../../services/orders/getOrderById");
const {getPaymentTokenService,  checkOutServices} = require("../../services/orders/getToken");
const getOrderByPayService = require("../../services/orders/getOrderByPay");
const deleteOrderService = require("../../services/orders/deleteOrderService");
const changeOrderStatusService = require("../../services/orders/changeOrderStatus");



exports.createOrder=async (req, res) => {
    let Result=await createService(req,Order)
    res.status(200).json(Result)
}

exports.getMyOrder=async (req, res) => {
    let Result=await getMyOrderService(req,Order)
    res.status(200).json(Result)
}

exports.getAllOrder=async (req, res) => {
    let Result=await getAllOrderService(req,Order)
    res.status(200).json(Result)
}

exports.getOrderById=async (req, res) => {
    let Result=await getOrderByIdService(req,Order)
    res.status(200).json(Result)
}

exports.getOrderByPay=async (req, res) => {
    let Result=await getOrderByPayService(req,Order)
    res.status(200).json(Result)
}
exports.deleteOrder=async (req, res) => {
    let Result=await deleteOrderService(req,Order)
    res.status(200).json(Result)
}

exports.changeOrderStatus=async (req, res) => {
    let Result=await changeOrderStatusService(req,Order)
    res.status(200).json(Result)
}

exports.getPaymentToken=async (req, res) => {
    let Result=await getPaymentTokenService(req,Order)
    res.status(200).json(Result)
}
exports.checkOut=async (req,res)=>{
    let Result=await checkOutServices(req,Order);
    res.status(200).json(Result);
}
