import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { addItemProduct } from '../../features/counter/productSlice';
import { mobile } from "../responsive";
import {
    Button,
    Link,
    Paper,
    Stack,
    SxProps,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import './detailItem.css'



export const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: relative;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;

export const Container = styled.div`

margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info}{
  opacity: 1;
}
`;

export const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;

export const Image = styled.img`
height: 75%;
z-index: 2;
`;

export const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`;

const Detail = ({ prodDetail }) => {
    const dispatch = useDispatch()
    return (
        <div className='item'>
            <Container>
                <Circle />
                <Image src={prodDetail.image} />
                <Info>

                



                </Info>
            </Container>
            <TableContainer
                component={Paper}
            // sx={tableContainerSx}
            >
                <Table stickyHeader={true}>
                    <TableHead sx={{ "& .MuiTableCell-stickyHeader": { backgroundColor: "primary.main" } }}>
                        <TableRow>
                            <TableCell scope="header">Street Address</TableCell>
                            <TableCell scope="header">Zip Code</TableCell>
                            <TableCell scope="header">City</TableCell>
                            <TableCell scope="header">State</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody
                        sx={{
                            "& tr:nth-of-type(2n+1)": {
                                backgroundColor: "grey.100",
                            },
                        }}
                    >

                        <TableRow key=''>
                            <TableCell scope="row">
                                <Stack direction="column">
                                    <div>{prodDetail.content}</div>

                                </Stack>
                            </TableCell>
                            <TableCell scope="row">
                                
                            </TableCell>
                            <TableCell scope="row"></TableCell>
                            <TableCell scope="row">
                                <Button
                                    sx={{ width: 200 }}
                                    variant="outlined"

                                    // variant="contained" 
                                    color="error"
                                    onClick={(() => { dispatch(addItemProduct(prodDetail)) })}
                                >
                                    Ajouter
                                </Button>
                                
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>

            {/* <Container>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Container> */}
        </div>
    )
}

export default Detail