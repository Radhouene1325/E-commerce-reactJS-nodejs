import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { afiche, conditionafiche, conditionValider, loginInformation, loginuseradmin } from '../../features/counter/productSlice';
import { Container, Wrapper, Title, Form, Input, Button, Link } from './styleUserLogin'
import Toast from './toast'
import PropsAction from './propsAction';

export const ToastContext = React.createContext()

export const Action = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

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

    const userlog = useSelector(loginInformation)
    console.log(userlog)


    const [userwrite, setUserwrite] = useState({})

    const conditionShow = useSelector(conditionafiche)
    console.log(conditionShow)
    const seccescondition = useSelector(conditionValider)
    console.log(seccescondition)

    const login = (e) => {
        e.preventDefault()
        dispatch(loginuseradmin(userwrite))
    }

    useEffect(() => {
        const { email, password } = userwrite

        switch (userlog) {
            case userlog:
                if (userlog.isAdmin === true) {
                    setTimeout(() => {
                        navigate('/admin')


                    }, 1000)
                } else if (userlog.isAdmin === false) {
                    navigate('/')
                    dispatch(afiche())
                }

                break;

            default:

        }

        switch (userlog.user) {
            case userlog.user:

                handleClick()
                break;
            default:
        }

    }, [userlog, dispatch, navigate])

    const index={navigate,setUserwrite,userwrite,userlog,handleClick,handleClose,open,login,Toast}
    const style={ Container, Wrapper, Title, Form, Input, Button, Link }
    return (
        
        <>
        <PropsAction index={index} style={style}/>
        </>
    )
}

