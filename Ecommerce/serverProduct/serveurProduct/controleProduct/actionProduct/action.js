import asyncHandler from 'express-async-handler'
import Product from '../../modelProduct/productModel.js'
import Category from '../../modelProduct/categoryProduct.js'

export const writeProduct = asyncHandler(async (req, res) => {
    const { title, content, image, price, category } = req.body
    const today = new Date()
    const date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    try {

        const product = await new Product({
            title, image, content, price, category, Date: date
        })
       await product.save()
        res.status(200).json({ message: 'saccesfully to be registre your itemProduct' })



    } catch (err) {
        console.log(err)
        if (title === '' || image === '' || content === '' || price === '',category==='') {
            res.status(400).json({ product: 'all inpute shoude be obligatory' })
        } 
        res.status(500).json({ message: 'filed to registre your information have you got any errreur' })
    }

})

export const showAllProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.find().populate("category")
        // Category
        const categoryProd = await Category.find()

        res.json({ data: { product, categoryProd } })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'have any problem' })
    }
    // return res.status(200).json({ message: 'seccesfully to show your product' })
})

export const deleteItem = asyncHandler(async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'seccesfully to delete itemProduct' })

    } catch (err) {
        console.log(err)
        res.status(402).json({ message: 'any problem to delet this item' })
    }
})

export const detailItem = asyncHandler(async (req, res) => {

    try {
        const product = await Product.findById(req.params.id).populate('category')
        res.json({ detail: product })
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: 'any er to find value product' })

    }
    return res.status(200).json({ message: 'seccesfully to find value for itemProduct' })
})

export const updateGet = asyncHandler(async (req, res) => {
    const data = await Product.findById(req.params.id)
    res.json({
        status: 200,
        data: data
    })
})

export const updateItemProduct = asyncHandler(async (req, res) => {
    const data = await Product.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        price: req.body.price
    });
    res.json({
        message: 'valider',
        status: 200,
        data: data
    })
    res.redirect('/')
});

export const bayCategory = asyncHandler(async (req, res) => {
    const articles = await Product.findById({
        $or: [
            { title: req.params.search },
            // { content: { $regex: ".*" + req.body.search + ".*" } },
        ],
    }).populate("category");
    // const categories = await Categories.find();
    // res.render("home", { articles: articles, categories: categories });
    res.json({ data: articles })
});


