const mongoose = require("mongoose");
import {RevenueSchema} from "../models/revenueModel";

const Revenue = mongoose.model('Revenue' , RevenueSchema) 

export const addNewRevenue = (req , res) => {
    let newRevenue = new Revenue(req.body)

    newRevenue.save((error , Revenue) => {
        if(error){
            res.send(error)
        }
        res.json(Revenue)
    });
}

export const getAllRevenue = (req , res) => {

    Revenue.find({}, (error , revenues) => {
        if(error){
            res.send(error)
        }
        res.json(revenues)
    });
}

export const getRevenueWithId = (req , res) => {

    Revenue.findById(req.params.revenueId, (error , revenue) => {
        if(error){
            res.send(error)
        }
        res.json(revenue)
    });
}

export const updateRevenue = (req , res) => {


    Revenue.findOneAndUpdate({_id : req.params.revenueId}, req.body , {new : true} , (error , revenue) => {
        if(error){
            res.send(error)
        }
        res.json(revenue)
    });
}

export const deleteRevenue = (req , res) => {


    Revenue.deleteOne({_id : req.params.revenueId}, (error , revenue) => {
        if(error){
            res.send(error)
        }
        res.json({message : "Delete ok"})
    });
}
