import mongoose from 'mongoose'


const categoryShima=mongoose.Schema({
    title:{
        type:String,
        required:false
    }
})

const category=mongoose.model("Category",categoryShima)


export default category