import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterItem, filtrage, findtofserch, serchFilter, serchFind, showAllProduct, showProduct } from '../../features/counter/productSlice'
import { Container } from '../Product/prodPropsStyles'
import PropsFilterProduct from './PropsFilterProduct'

import { Center } from '../header/styleHeader'
import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'


const ProdFilterSerch = () => {

    const itemfilterproduct = useSelector(filtrage).product
   
    console.log(itemfilterproduct)

    return (
        <React.Fragment>
            {itemfilterproduct.length === 0 ? <Navigate to='/notfound' /> :
               

                    <Container>
                        {itemfilterproduct.map((item) => <PropsFilterProduct item={item} />)}

                    </Container>
               
            }
        </React.Fragment>
    )
}

export default ProdFilterSerch