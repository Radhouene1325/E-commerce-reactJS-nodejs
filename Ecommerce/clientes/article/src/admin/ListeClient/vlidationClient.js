import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { chekoutDelete, getchekoutAdmin } from '../../features/counter/productSlice';
import { useDispatch } from 'react-redux';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ColorCheckboxes({deleteItem}) {
    const [chek, setChek] = useState(false)
    const handelChang = () => {
       
    }
    console.log(chek)
  
    const dispatch = useDispatch()
    const valideCommende = (id) => {
        dispatch(chekoutDelete(id))
        dispatch(getchekoutAdmin())
         setChek(!chek)
    }
const{row}=deleteItem
    return (
        <div>


            <Checkbox
                {...label}
                checked={chek}
                color="success"
                onChange={(()=>{valideCommende(row._id)})}
            />
        </div>
    );
}
