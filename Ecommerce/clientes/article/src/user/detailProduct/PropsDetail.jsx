import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { detail, itemDetail } from '../../features/counter/productSlice';
import { mobile } from "../responsive";
import Detail from './Detail';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}

`;
const PropsDetail = () => {
    const dispatch=useDispatch()
    const {id}=useParams()
    useEffect(()=>{dispatch(detail(id))},[dispatch,id])

    const prodDetail=useSelector(itemDetail)
    console.log(prodDetail)
    
    return (
        <div>
            <Container>
               
                    <Detail prodDetail={prodDetail} />
            
            </Container>
        </div>
    )
}

export default PropsDetail