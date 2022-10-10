import React from 'react'

const CreateAdmin = ({admin,style}) => {
    const {name,email,password,isAdmin,handelSingup,open,condition,handleClick,handleClose,setFormdata,formdata}=admin
    const{Agreement, Button, Container, Form, Input, Title, Wrapper}=style
  return (
    <div>
         <Container>
                <Wrapper>
                {/* <ChekPass open={open} handleClose={handleClose} /> */}
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

export default CreateAdmin