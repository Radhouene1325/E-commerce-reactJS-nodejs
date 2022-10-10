import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Chip from '@mui/joy/Chip';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { FilterContext } from '../header/Header';
import { filterWithSelect, showAllProduct, showProduct } from '../../features/counter/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


const Filter = () => {
    const dispatch = useDispatch()
    const filterSelect = (e) => {
        let index = e.target.value
        console.log(index)
        dispatch(filterWithSelect(index))

    }
    //  useEffect(() => {
    //     dispatch(showProduct())
    // }, [dispatch])

    const category = useSelector(showAllProduct).categoryProd
    console.log(category)


    // const filterContext=React.useContext(FilterContext)
    // const{filterSelect,category}=filterContext
    return (
        //     <Select
        //     placeholder="Select a pet…"
        //    

        //     sx={{ width: 200 }}
        //     onChange={filterSelect}
        //   >
        //     {!category?<div>lodding..</div>:  category.map((categ)=><Option name='category' value={categ.title}>{categ.title}</Option>)}


        //   </Select>
        <select  onChange={filterSelect}>
            {!category?<div>lodding..</div>:  category.map((categ)=> <option value={categ.title}>{categ.title} </option>)}
           
            ...
        </select>
    )
}

export default Filter