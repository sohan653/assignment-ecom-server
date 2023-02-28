const userCreateService = require("../../services/users/userCreateService");
const User = require("../../models/users/userModel");
const userLoginService = require("../../services/users/userLoginService");
const userDetailsService = require("../../services/users/userDetailService");
const userUpdateService = require("../../services/users/userUpdateService");

exports.registration=async (req, res) => {
    let Result=await userCreateService(req,User)
    res.status(200).json(Result)
}

exports.login=async (req, res) => {
    let Result=await userLoginService(req,User)
    res.status(200).json(Result)
}

exports.myProfile=async (req, res) => {
    let Result=await userDetailsService(req,User)
    res.status(200).json(Result)
}

exports.updateProfile=async (req, res) => {
    let Result=await userUpdateService(req,User)
    res.status(200).json(Result)
}
exports.checkLogin=async (req,res)=>{
    res.status(200).json({login:true})
}

exports.checkAdmin=async (req,res)=>{
    res.status(200).json({isAdmin:true})
}