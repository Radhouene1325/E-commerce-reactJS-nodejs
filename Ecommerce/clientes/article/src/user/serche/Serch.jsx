import { Search } from '@material-ui/icons'
import React, { createContext, useContext, useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Input, SearchContainer } from '../header/styleHeader'
import { SerchContexte } from '../header/Header'
import { aficheSlider, cacherSlider, filterItem, findtofserch, serchFind } from '../../features/counter/productSlice'
import ProdFilterSerch from './ProdFilterSerch'
export const SedValueContext = createContext()
const Serch = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputRef=useRef('')

    const handelserch = (e) => {
        // const index = e.target.value
        dispatch(filterItem(inputRef.current.value))
        if (inputRef.current.value.length !== 0) {
            
            dispatch(cacherSlider())

        } else{
            dispatch(aficheSlider())
        }

    }

    return (
        <div>
            <SearchContainer>

                <Input placeholder="Search" ref={inputRef} name='name' onChange={handelserch} />

                <Search style={{ color: "gray", fontSize: 20 }} />
            </SearchContainer>


        </div>
    )
}

export default Serch