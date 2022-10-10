import React from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletItemProduct, showAllProduct, showProduct } from '../../features/counter/productSlice'
import ItemProductAdmin from './ItemProductAdmin'
import CircularUnderLoad from './progress'
import '../outletteAdmin/out.css'
export const AllProductContext = createContext()
const PropsItemProduct = () => {
    const dispatch = useDispatch()
     useEffect(() => { dispatch(showProduct()) }, [dispatch])
    const popularProducts = useSelector(showAllProduct).product
    console.log(popularProducts)
    const deleteprod = (id) => {
        dispatch(deletItemProduct(id))
      
        dispatch(showProduct())
    }


    return (
        <div>{!popularProducts?<CircularUnderLoad/>:
            <AllProductContext.Provider value={{ popularProducts, deleteprod }}>
                <ItemProductAdmin />
            </AllProductContext.Provider>}


        </div>
    )
}

export default PropsItemProduct