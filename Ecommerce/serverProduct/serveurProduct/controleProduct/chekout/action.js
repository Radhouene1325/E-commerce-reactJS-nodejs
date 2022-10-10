import AsyncHandler from "express-async-handler";
import Chkout from "../../modelProduct/poproduct/chkoutModel.js"
import ChkoutProduct from '../../modelProduct/poproduct/ChekPopulate.js'
export const createCkout = AsyncHandler(async (req, res) => {
    const { name, telephone, product,cin,adress,totale } = req.body
    const today = new Date()
    const date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    try {
        

        const chek = await new Chkout({
            name,
            telephone,
            cin,
            adress,
            product,
            totale,
            Date: date


        })
        await chek.save()
        res.json({ chek: "commende fait avec succes" })
    } catch (err) {
        console.log(err)
        if(name===""||telephone===""||product===""||cin===""||adress===""){
            res.json({err:"ilya des comps vides"})
        }

    }

})

export const getChekout = AsyncHandler(async (req, res) => {
    const data = await Chkout.find()
    res.json({ data: data })
})


export const deletChekout=AsyncHandler(async(req,res)=>{
try{

    const chekout=await Chkout.findByIdAndDelete(req.params.id)
    res.status(200).json({
        chkout:'secces to delete this commende',
    })
}catch(err) {
    console.log(err)

}

})