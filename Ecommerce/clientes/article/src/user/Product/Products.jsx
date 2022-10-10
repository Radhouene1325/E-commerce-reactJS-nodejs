
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemProduct, filterWithSelect, findtofserch, showAllProduct, showCategory, showGetCategory, showProduct } from '../../features/counter/productSlice'
import ProductProps from './ProductProps'
import { Container } from "./productStyle"
import { SerchContexte } from '../header/Header'
import { Navigate, useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import axios from 'axios'

export const ProductContext = React.createContext()
const Products = () => {

    const dispatch = useDispatch()
    const article = useSelector(showAllProduct).product
    console.log(article)
    useEffect(() => { dispatch(showProduct()) }, [dispatch])

    return (

        <React.Fragment>
            {

                <Container>
                    {!article ? <div>lodding......</div> :
                        <ProductContext.Provider value={{ article }}>
                            <ProductProps />
                        </ProductContext.Provider>}
                </Container>

            }
        </React.Fragment>




    )
}

export default Products





