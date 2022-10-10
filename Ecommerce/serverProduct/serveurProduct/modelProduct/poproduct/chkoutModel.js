import mongoose from 'mongoose'

const chkoutSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    cin:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        default:new Date(toString())
    },

    product:{
        type:[Object]

    },
    totale:{
        type:Number,
       

    }
})
const chkout=mongoose.model('Commende',chkoutSchema)
export default chkout