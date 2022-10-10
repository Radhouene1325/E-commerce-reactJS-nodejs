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

export default function ValidePanier(props) {
    const navigate = useNavigate()
    const handelcommendes = () => {
        handleClosee()
        dispatch(seccesChekout())
        navigate('/')
    }


    const { opene, handleClosee,valider } = props

    const dispatch = useDispatch()

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
        
            {valider && <Snackbar open={opene} autoHideDuration={6000}>
                <Alert onClose={handleClosee} severity="error" sx={{ width: '100%' }}>
                    remplire votre panier 
                </Alert>
            </Snackbar>}



        </Stack >
    );
}
