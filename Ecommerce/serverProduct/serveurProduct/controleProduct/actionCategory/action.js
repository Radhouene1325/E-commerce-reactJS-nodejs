 import asyncHandler from 'express-async-handler'
 import Category from '../../modelProduct/categoryProduct.js'

 export const writeCategory=asyncHandler(async(req,res)=>{
    const { title} = req.body
    try {
        if (title === '') {
            res.json({ message: 'all inpute shoude be obligatory' })
        } else {

            const category = await new Category({
                title
            })
            await category.save()
            res.status(200).json({ message: 'saccesfully to be registre your category' })
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'filed to registre your information have you got any errreur' })
    }


})

export const getCategory=asyncHandler(async(req,res)=>{
    try {
        const category = await Category.find()
        res.json({ data: category })
        // res.status(200).json({ message: 'seccesfully to show your category' })

    } catch (err) {
        console.log(err)
        // res.status(400).json({ message: 'have any problem' })
    }
})

export const suprimeCategory=asyncHandler(async(req,res)=>{
    try {
        await Category.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'seccesfully to delete category' })

    } catch (err) {
        console.log(err)
        res.status(402).json({ message: 'any problem to delet this category' })
    }
})

export const categoryUpdate=asyncHandler(async(req,res)=>{
    try{
        await Category.findByIdAndUpdate(req.params.id,{
         title:req.body.title,
     
        })
         res.json({message:'ok to valider'})
 
     }catch(err){
         console.log(err)
     }
})
