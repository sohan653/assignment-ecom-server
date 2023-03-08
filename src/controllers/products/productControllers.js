const Product = require("../../models/products/productModel");
const createProductService = require("../../services/products/createProduct");
const listProductsService = require("../../services/products/listProductsService");
const photoUpdateService = require("../../services/products/photoUpdateService");
const productUpdateService = require("../../services/products/productUpdateService");
const readProductService = require("../../services/products/readProductService");
const searchByCartService = require("../../services/products/searchByCartService");
const deleteProductService = require("../../services/products/deleteProductService");


exports.createProduct=async (req, res) => {
    let Result=await createProductService(req,Product)
    res.status(200).json(Result)
}

exports.listProducts=async (req, res) => {
    let Result=await listProductsService(req,Product)
    res.status(200).json(Result)
}
exports.updateProduct=async (req, res) => {
    let Result=await productUpdateService(req,Product)
    res.status(200).json(Result)
}

exports.readProduct=async (req, res) => {
    let Result=await readProductService(req,Product)
    res.status(200).json(Result)
}

exports.searchByCart=async (req, res) => {
    let Result=await searchByCartService(req,Product)
    res.status(200).json(Result)
}
exports.photoUpdate=async (req,res)=>{
    let Result=await photoUpdateService(req,Product)
    res.status(200).json(Result)
}
exports.deleteProduct=async (req, res) => {
    let Result=await deleteProductService(req,Product)
    res.status(200).json(Result)
}

