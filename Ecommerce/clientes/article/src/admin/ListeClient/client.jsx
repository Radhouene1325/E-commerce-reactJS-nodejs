import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios';
import { useEffect } from 'react';
import CottageIcon from '@mui/icons-material/Cottage';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './index.css'
import { chkoutAdmin, getchekoutAdmin } from '../../features/counter/productSlice';
import {useDispatch,useSelector} from 'react-redux'
import ColorCheckboxes from './vlidationClient';


function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className='table'>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.cin}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.telephone}</TableCell>
                <TableCell align="right">{row.adress}</TableCell>
                <TableCell align="right">{row.Date}  </TableCell>
                <TableCell align="right">{ row.totale}  </TableCell>
               <ColorCheckboxes deleteItem={props}   />

            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Article</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                        <TableCell align="right">Total pricede chaque article (DT)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.product
                                        .map((historyRow) => (
                                            <TableRow key={historyRow}>
                                                <TableCell component="th" scope="row">
                                                    {historyRow.Date
                                                    }
                                                </TableCell>
                                                <TableCell> <img src={historyRow.image} style={{ width: "7rem", height: '7rem' }} /></TableCell>
                                                <TableCell align="right"> {historyRow.quantity} </TableCell>
                                                

                                                <TableCell align="right">
                                                    { historyRow.quantity===1?historyRow.price:historyRow.priceTotale}
                                                </TableCell>

                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}



export default function Clients() {
    const [show, setShow] = React.useState([])
    const getChek = async () => {
        const res = await axios.get('http://127.0.0.1:5000/api/chekout')
        const data = await res.data
        setShow(data.data)
    }
    useEffect(() => { getChek() }, [])
    console.log(show)

    const dispatch=useDispatch()
useEffect(() => {
  dispatch(getchekoutAdmin())
}, [dispatch])

    const chekout=useSelector(chkoutAdmin)
    console.log(chekout)
 
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead className='tab'>
                    <TableRow>
                        <TableCell />
                        <TableCell>Cin</TableCell>
                        <TableCell align="right">name</TableCell>
                        <TableCell align="right">Telephone&nbsp;<SettingsPhoneIcon /> </TableCell>
                        <TableCell align="right">adress&nbsp;<CottageIcon /> </TableCell>
                        <TableCell align="right">Date&nbsp;<QueryBuilderIcon /> </TableCell>
                        <TableCell align="right">priceTotle&nbsp;<AddShoppingCartIcon /> </TableCell>
                        <TableCell align="right">valider&nbsp;<AddShoppingCartIcon /> </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody >
                    {chekout .map((row) => (
                        <Row row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
