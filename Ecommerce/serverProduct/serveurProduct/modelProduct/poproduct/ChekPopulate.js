import mongoose from "mongoose";


export const chkoutSchema=mongoose.Schema({

    panierpop:{
        type:[Object]
    },
    Date:{
        type:String,
        default:new Date(toString())
    },
})

const chkoutProduct=mongoose.model('Chkoutp',chkoutSchema)
export default chkoutProduct