import express from 'express'
import { createCategory, deleteCategory, showCategory, updateCategory } from '../controleProduct/actionCategory/categoryControleProduct.js'

const categoryRoute=express.Router()

categoryRoute.route('/create=category').put(createCategory)
categoryRoute.route('/show=category').get(showCategory)
categoryRoute.route('/delet=owncategory/:id').delete(deleteCategory)
categoryRoute.route('/update=category/:id').post(updateCategory)


export default categoryRoute
