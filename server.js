const express =require('express');
const router =require('./src/routes/api');
const app= new express();


// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');

const cors =require('cors');

// Database Lib Import
const mongoose =require('mongoose');

// Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


// Body Parser Implement


// Request Rate Limit
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

// Mongo DB Database Connection
let URI=`mongodb+srv://sohanur653:xEOCeD8sKE6bbwHT@cluster0.gmtdmww.mongodb.net/?retryWrites=true&w=majority`;
let OPTION={autoIndex:true}
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
})


// Routing Implement
app.use("/api/v1",router)

// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


const port=process.env.PORT || 4000

app.listen(port,()=>{
    console.log("server start on 4000")
})