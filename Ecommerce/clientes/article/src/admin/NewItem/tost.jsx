import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { useDispatch, useSelector } from 'react-redux';
import { conditionafiche, deleteDelete, filedPassword } from '../../features/counter/productSlice';
import { ItemContex } from './ContextNewItem';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast(props) {
   



    const { handleClick, open, handleClose ,create} = React.useContext(ItemContex)

    const dispatch = useDispatch()

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
           
                {create.message &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        secces for login
                    </Alert>
                </Snackbar>}
        </Stack >
    );
}
