import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { inscription, userCreate } from '../../features/counter/productSlice'
import { Agreement, Button, Container, Form, Input, Title, Wrapper } from './styleInscription'
import ChekPass from './totasRegister'

const Inscription = () => {
    const [condition, setCondition] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const register = useSelector(userCreate)
    console.log(register)
    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        password: '',
        
        isAdmin: false
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




    return (
        <div>
            <Container>
                <Wrapper>
                <ChekPass open={open} handleClose={handleClose} />
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input type='text' placeholder="name" value={name} onChange={((e) => setFormdata({ ...formdata, name: e.target.value }))} />
                        <Input type='email' placeholder="xyz@mail.com" value={email} onChange={((e) => setFormdata({ ...formdata, email: e.target.value }))} />
                        <Input type='password' placeholder="password" value={password} onChange={((e) => setFormdata({ ...formdata, password: e.target.value }))} />
                        {/* <Input type='password' placeholder="repite votre password" value={chekPassword} onChange={((e) => setFormdata({ ...formdata, chekPassword: e.target.value }))} /> */}

                        {condition && <Input placeholder="condition" value={isAdmin} />}
                        {/* <Input placeholder="password" />
                        <Input placeholder="confirm password" /> */}
                        <Agreement>
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button onClick={handelSingup} >CREATE</Button>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Inscription