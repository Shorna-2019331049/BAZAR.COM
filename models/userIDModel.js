// const mongoose = require('mongoose');
import mongoose from "mongoose";

const schema= mongoose.Schema({
    bankUID: String,
    password : String,
    email :String,
    bdt : {type: Number,default:100000000}
});

const userIDmodel=mongoose.model('uid',schema);

export default userIDmodel;

// module.exports= userIDmodel;