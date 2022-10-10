import React from 'react'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";


import { Container, Wrapper, Left, Language, SearchContainer, Input, Center, Logo, Right, MenuItem } from "./styleHeader"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addp, conditionafiche, deleteDelete, filterWithSelect, loginInformation, panier, showAllProduct, showProduct } from '../../features/counter/productSlice';
import { useState } from 'react';
import Serch from '../serche/Serch';
import ProdFilterSerch from '../serche/ProdFilterSerch';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import Filter from '../selectSerch/Filter';
import PersonIcon from '@mui/icons-material/Person';

export const FilterContext = React.createContext()
 

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const category = useSelector(showAllProduct).categoryProd
    // useEffect(() => {
    //     dispatch(showProduct())
    // }, [dispatch])



    const cart = useSelector(panier)
    console.log(cart)

    
    const conditionShow = useSelector(conditionafiche)
    console.log(conditionShow)

    const userlog = useSelector(loginInformation)
    console.log(userlog)

    const handelRegidter=()=>{
        window.location.assign('/inscription')
    }

    const tab=[1,2,3,5]

    const x=tab.indexOf(2)
    console.log(x)

    return (
        <div>
            <Container color='d0eeee'>
                <Wrapper>
                    <Left>
                        <MenuItem onClick={(() => { navigate('/') })}>Home</MenuItem>
                        <MenuItem >admin</MenuItem>
                            <Filter/>
                        {/* <FilterContext.Provider >
                        </FilterContext.Provider> */}
                    </Left>
                    <Center >
                        <Serch />


                    </Center>
                    <Right>
                        <MenuItem onClick={(() => { navigate('/inscription') })}>REGISTER</MenuItem>
                        {conditionShow? <MenuItem onClick={(() => { dispatch(deleteDelete()) })}>{userlog.name}</MenuItem> : <MenuItem onClick={(() => { navigate('/login') })}><PersonIcon/></MenuItem>}
                       
                        <MenuItem>
                            <Badge badgeContent={cart.length} color="primary">
                                <ShoppingCartOutlined onClick={(() => { navigate('/panier') })} />
                            </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>

        </div>
    )
}

export default Header
