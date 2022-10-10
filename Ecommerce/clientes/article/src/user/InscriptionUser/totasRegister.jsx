import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { useDispatch, useSelector } from 'react-redux';
import { conditionafiche, deleteDelete, filedPassword } from '../../features/counter/productSlice';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ChekPass(props) {




    const { open, handleClose } = props

    const dispatch = useDispatch()

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
          

            <Snackbar open={open} autoHideDuration={6000} onClose={(() => { handleClose(); dispatch(deleteDelete()) })}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    password duplcated error please verify votre password
                </Alert>
            </Snackbar>

          


        </Stack >
    );
}
