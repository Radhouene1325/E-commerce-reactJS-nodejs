import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { addChekout, conditionafiche, deleteDelete, seccesChekout, verifyPanier } from '../../features/counter/productSlice';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ToastChek(props) {
    const navigate = useNavigate()
    const handelcommendes = () => {
        handleClosee()
        dispatch(seccesChekout())
        navigate('/')
    }

    const valider = useSelector(verifyPanier)
    console.log(valider)

    const { opene, handleClosee, chekoutSecces } = props

    const dispatch = useDispatch()
   

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
           


            {chekoutSecces.err && <Snackbar open={opene} autoHideDuration={6000} onClose={(() => { handleClosee(); dispatch(addChekout()) })}>
                <Alert onClose={handleClosee} severity="error" sx={{ width: '100%' }}>
                    {chekoutSecces.err}
                </Alert>
            </Snackbar>}

            {chekoutSecces.chek && <Snackbar open={opene} autoHideDuration={6000} onClose={(() => { handelcommendes(); dispatch(seccesChekout()) })}>
                <Alert onClose={handleClosee} severity="success" sx={{ width: '100%' }}>
                    {chekoutSecces.chek}
                </Alert>
            </Snackbar>}



        </Stack >
    );
}
