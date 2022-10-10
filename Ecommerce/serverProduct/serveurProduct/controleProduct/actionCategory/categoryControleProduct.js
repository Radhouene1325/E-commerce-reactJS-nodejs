import asyncHandler from 'express-async-handler'
import Category from '../../modelProduct/categoryProduct.js'
import { categoryUpdate, getCategory, suprimeCategory, writeCategory } from './action.js'
export const createCategory=writeCategory

export const showCategory=getCategory

export const deleteCategory=suprimeCategory

export const updateCategory=categoryUpdate
