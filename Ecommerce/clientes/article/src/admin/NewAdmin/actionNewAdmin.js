import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { inscription, userCreate } from '../../features/counter/productSlice'
import CreateAdmin from './CreateAdmin'
import { Agreement, Button, Container, Form, Input, Title, Wrapper } from '../../user/InscriptionUser/styleInscription'

export const ActionNewAdmin = () => {
    const [condition, setCondition] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const register = useSelector(userCreate)
    console.log(register)
    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        password: '',
        
        isAdmin: true
    })
    const { name, email, password, isAdmin } = formdata
    console.log(formdata)


    const handelSingup = (e) => {
        e.preventDefault()
        // if (password === chekPassword) {
        //     // navigate('/login')
        // } else {
        //     handleClick()
        // }
        dispatch(inscription(formdata))
    }


    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const newAdmin={name,email,password,isAdmin,handelSingup,open,handleClick,handleClose,formdata,setFormdata,condition}
const style={Agreement, Button, Container, Form, Input, Title, Wrapper}
  return (
    <div>
        <CreateAdmin admin={newAdmin} style ={style} />
    </div>
  )
}

