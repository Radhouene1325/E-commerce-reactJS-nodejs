import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { afiche, conditionafiche, conditionValider, loginInformation, loginuseradmin, panier } from '../../features/counter/productSlice'
import { Container, Wrapper, Title, Form, Input, Link } from '../Login/styleUserLogin'

import { useEffect } from 'react'

import Toast from '../Login/toast'



const LoginPassChekout = () => {


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
    const cart = useSelector(panier)
    console.log(cart)


    const [userwrite, setUserwrite] = useState({})

    const conditionShow = useSelector(conditionafiche)
    console.log(conditionShow)
    const seccescondition = useSelector(conditionValider)
    console.log(seccescondition)

    const login = (e) => {
        e.preventDefault()
        dispatch(loginuseradmin(userwrite))
        //  setOpen(true);
    }

    useEffect(() => {

        const { email, password } = userwrite

        switch (userlog) {
            case userlog:
                if (userlog.isAdmin === false && cart.length !== 0) {
                    setTimeout(() => {
                        navigate('/chkout')


                    }, 1000)
                    dispatch(afiche())
                }
                // else if(userlog.isAdmin===false){
                //     navigate('/')
                //     dispatch(afiche())
                // }

                break;

            default:

        }

        // switch (userlog.isAdmin) {
        //     case userlog.isAdmin === false:
        //         <Navigate to='/' />
        //         break;
        //     default:
        // }


        switch (userlog.user) {
            case userlog.user:

                handleClick()
                break;
            default:
        }

    }, [userlog, dispatch, navigate])


    return (
        <div>
            <Container>


                {/* {userlog.isAdmin===true ? <Navigate to='/' /> : null} */}



                {!userlog ? <>loding...</> :
                    <Wrapper>
                        <Title>SIGN IN</Title>

                        <Form>



                            <Input placeholder="email" required={true} onChange={(e) => setUserwrite({ ...userwrite, email: e.target.value })} />

                            <Input placeholder="password" required={true} onChange={(e) => setUserwrite({ ...userwrite, password: e.target.value })} />

                            {/* <Button onClick={login}>LOGIN</Button> */}
                            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                            <Link onClick={(() => { navigate('/inscription') })} >CREATE A NEW ACCOUNT</Link>

                            {/* <Button onClick={login}>login</Button> */}

                            <Toast handleClick={handleClick} handleClose={handleClose} open={open} login={login} userlog={userlog} />

                        </Form>
                    </Wrapper>
                }
            </Container>
        </div>
    )
}

export default LoginPassChekout
