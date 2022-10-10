import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { categoryDelete, showCategory, showGetCategory, writeCategory } from '../../features/counter/productSlice';
import { Input, Tab } from '@material-ui/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';





const Category = () => {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(showCategory()) }, [dispatch])
    const AllCategory = useSelector(showGetCategory)
    console.log(AllCategory)
    

    const [category, setCategory] = useState({
        title: ''
    })
    const handelAjouter = () => {
        dispatch(writeCategory(category))
        dispatch(showCategory())
    }
  
    const handelDelete = (id) => {
        

        if (AllCategory.length) {
        
            dispatch(categoryDelete(id))
            dispatch(showCategory())
        }


    }
    const navigate = useNavigate()
    return (
        <TableContainer
            component={Paper}
        // sx={tableContainerSx}
        >
            <Input placeholder="title" onChange={((e) => { setCategory({ ...category, title: e.target.value }) })} />
            <Button onClick={(() => { handelAjouter() })}>valider</Button>
            <Table stickyHeader={true}>
                <TableHead sx={{ "& .MuiTableCell-stickyHeader": { backgroundColor: "primary.main" } }}>
                    <TableRow>
                        <TableCell scope="header">Street Address</TableCell>
                        <TableCell scope="header">Zip Code</TableCell>
                        <TableCell scope="header">City</TableCell>
                        <TableCell scope="header">State</TableCell>
                        <Button scope="header" onClick={(() => { navigate('/admin') })} >goBack</Button>

                    </TableRow>
                </TableHead>
                <TableBody
                    sx={{
                        "& tr:nth-of-type(2n+1)": {
                            backgroundColor: "grey.100",
                        },
                    }}
                >
                    {AllCategory.map((item) => (
                        <TableRow key={item.streetAddress}>
                            <TableCell scope="row">
                                <Stack direction="column">
                                    <div>{item.title}</div>

                                </Stack>
                            </TableCell>
                            <TableCell scope="row">
                                <Link
                                    color="secondary"
                                    target="_blank"
                                >

                                </Link>
                            </TableCell>
                            <TableCell scope="row"></TableCell>
                            <TableCell scope="row">
                                <Button
                                    sx={{ width: 200 }}
                                    variant="outlined"

                                    // variant="contained" 
                                    color="error"

                                    onClick={(() => { handelDelete(item._id) })}
                                >
                                    delete
                                </Button>
                                <Button
                                    sx={{ width: 200 }}
                                    variant="outlined"
                                    color="success"

                                >
                                    update
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default Category