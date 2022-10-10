import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {ToastContext} from './action'
import { useDispatch, useSelector } from 'react-redux';
import { conditionafiche, deleteDelete, filedPassword } from '../../features/counter/productSlice';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast(props) {
    const toast = React.useContext(ToastContext)



    const { open, handleClose, userlog,login } = props

    const dispatch = useDispatch()

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Button variant="outlined" onClick={login}>
               Connection
            </Button>
            {userlog.user && 
                <Snackbar open={open} autoHideDuration={6000} onClose={(()=>{handleClose();dispatch(deleteDelete())})}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        {userlog.user}
                    </Alert>
                </Snackbar>}
                {userlog.isCorrect &&
                <Snackbar open={open} autoHideDuration={6000} onClose={(()=>{handleClose();dispatch(filedPassword())})}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        {userlog.isCorrect}
                    </Alert>
                </Snackbar>}
                {userlog.isAdmin &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        secces for login
                    </Alert>
                </Snackbar>}
        </Stack >
    );
}
