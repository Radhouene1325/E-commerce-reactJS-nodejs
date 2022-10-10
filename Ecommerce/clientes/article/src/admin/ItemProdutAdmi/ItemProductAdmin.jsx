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
import { AllProductContext } from "./PropsItemProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import '../outletteAdmin/out.css'

const ItemProductAdmin = () => {
    const navigate = useNavigate()
    const allProduct = useContext(AllProductContext)
    const { popularProducts, deleteprod } = allProduct


    return (
        <>
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
                        {popularProducts.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell scope="row">
                                    <Stack direction="column">
                                        {/* <div>{address.image}</div> */}
                                        <img src={item.image} style={{ width: "12rem", height: '10rem' }} />

                                    </Stack>
                                </TableCell>
                                <TableCell scope="row">
                                    {item.price}
                                    {item.title}
                                </TableCell>
                                <TableCell scope="row"></TableCell>
                                <TableCell scope="row">
                                    <Button
                                        sx={{ width: 200 }}
                                        variant="outlined"

                                        // variant="contained" 
                                        color="error"
                                        onClick={(() => { deleteprod(item._id) })}
                                    >
                                        delete
                                    </Button>
                                    <Button
                                        sx={{ width: 200 }}
                                        variant="outlined"
                                        color="success"
                                        onClick={(() => { navigate(`/admin/update/${item._id}`) })}

                                    >
                                        update
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
export default ItemProductAdmin