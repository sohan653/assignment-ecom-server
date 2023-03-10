
const createService = require("../../services/common/createService");
const Order = require("../../models/orders/order");
const getMyOrderService = require("../../services/orders/getMyOrderServices");


exports.createOrder=async (req, res) => {
    let Result=await createService(req,Order)
    res.status(200).json(Result)
}

exports.getMyOrder=async (req, res) => {
    let Result=await getMyOrderService(req,Order)
    res.status(200).json(Result)
}