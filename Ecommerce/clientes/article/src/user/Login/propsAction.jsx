import React from 'react'


const PropsAction = ({index,style}) => {

    const{navigate,Toast,setUserwrite,userwrite,userlog,handleClick,handleClose,open,login}=index ////
    const{ Container, Wrapper, Title, Form, Input, Button, Link}=style
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
                        <Link onClick={(() => { navigate('/inscription') })}  >CREATE A NEW ACCOUNT</Link>

                        <Toast handleClick={handleClick} handleClose={handleClose} open={open} login={login} userlog={userlog} />

                    </Form>
                </Wrapper>}
        </Container>
    </div>
  )
}

export default PropsAction