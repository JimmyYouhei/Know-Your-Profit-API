const mongoose = require("mongoose")

const Schema = mongoose.Schema;

export const RevenueSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    amount : {
        type : Number,
        required : true
    },
    receivedDate : {
        type : Date,
        required : true 
    },
    createdDate : {
        type : Date,
        default : Date.now
    },
    createdBy : {
        type : String
    },
    modifiedDate : {
        type : Date
    },
    modifiedBy : {
        type : String
    }
})

