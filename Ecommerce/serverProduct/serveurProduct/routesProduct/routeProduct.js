import express from 'express'
import { updateGet } from '../controleProduct/actionProduct/action.js'

import { aficheProduct, createProduct, deletItemProduct, detailProduct, searchArticle, updateItem } from '../controleProduct/actionProduct/productControle.js'
import {  deleteCommende, showPanier, writeProductChkout } from '../controleProduct/chekout/chkoutProdeuct.js'

const router=express.Router()

router.route('/create=product').put(createProduct)
router.route('/show=product').get(aficheProduct)
router.route('/delet=itemProduct/:id').delete(deletItemProduct)
router.route('/update=itemUpdate/:id').post(updateItem)
router.route('/update=itemUpdate/:id').get(updateGet)
router.route('/detail=itemDetail/:id').get(detailProduct)

router.route('/searchArticle/:id').get(searchArticle)




/**************
 * 
 */
router.route('/chekout').put(writeProductChkout)

router.route('/chekout').get(showPanier)
router.route('/delet/:id').delete(deleteCommende)

// router.route('/popchekout').put(putpopulateProduct)

export default router