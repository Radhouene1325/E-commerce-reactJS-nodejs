
import mongoose from 'mongoose'

const productSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
     
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    
    Date:{
        type:String,
        default:new Date(toString())
    },
    price:{
        type:Number,
        required:false
    },
    priceTotale:{
        type:Number,
        default:1
    },
    quantity:{
        type:Number,
        default:1
    },
    // dont le cas de faire un filtrage des product nous avon de faire une (reletionship mongoose)
    category:{
        type:mongoose.Schema.Types.ObjectId,ref:'Category'
    }

})

const product=mongoose.model("Product",productSchema)

export default product