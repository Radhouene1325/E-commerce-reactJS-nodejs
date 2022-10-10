import React, { useContext } from 'react'
import { Info, Container, Circle, Image, Icon } from "./prodPropsStyles"
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addItemProduct, addp, detail, index, showAllProduct, showProduct } from '../../features/counter/productSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ProductContext } from './Products';
const ProductProps = () => {
    
    const {article}=useContext(ProductContext)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <React.Fragment>
            {article.map((item)=>
            <Container>
                <Circle />
                <Image src={item.image} />
                <Info>
                    <Icon>
                        <ShoppingCartOutlined onClick={(() => { dispatch(addItemProduct(item));dispatch(index()) })} />

                    </Icon>
                    <Icon>
                        <SearchOutlined onClick={(() => { navigate(`/detail/${item._id}`)})} />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>

                </Info>
            </Container>)}
        </React.Fragment>
    )
}

export default ProductProps