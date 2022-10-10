import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Agreement, Container, Form, Input, Title, Wrapper } from '../InscriptionUser/styleInscription'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import { ChekoutContext } from './Chekout';
import ToastChek from './tostValidChekout';
import { chekValidePanier, validchekout } from '../../features/counter/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const commendes = React.useContext(ChekoutContext)
  const { save, setSave, cart, handelChekout } = commendes
  const { name, telephone, cin, adress, product } = save

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const chekoutSecces = useSelector(validchekout)
  console.log(chekoutSecces)

  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false)
  const onChangechek = () => {
    setShow(!show)

  }


  // /*********tostchekout**************** */
  const [opene, setOpene] = React.useState(false);

  const handleClick = () => {
    setOpene(true);
  };

  const handleClosee = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpene(false);
  };
  // /******************************* */
  // const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return (
    <div>{
      cart.length === 0 ? (window.location.href = '/panier') : (
        <>
          <Button onClick={handleClickOpen('paper')}>confirmer votre commende</Button>

          <ToastChek chekoutSecces={chekoutSecces} handleClosee={handleClosee} opene={opene} cart={cart} />
          <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                <Form>
                  <Input type='number' placeholder="cin" value={cin} onChange={((e) => setSave({ ...save, cin: e.target.value }))} />
                  <Input placeholder="name" value={name} onChange={((e) => setSave({ ...save, name: e.target.value }))} />
                  <Input type='phone' placeholder="telephone" value={telephone} onChange={((e) => setSave({ ...save, telephone: e.target.value }))} />
                  <Input type='email' placeholder="adressLocal" value={adress} onChange={((e) => setSave({ ...save, adress: e.target.value }))} />

                  <Agreement>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox onChange={(() => { !show ? setSave({ ...save, product: cart }) : setSave({ ...save, product: "" }); onChangechek() })} checked={show} />} label="confirme votre commende" />
                    </FormGroup>
                  </Agreement>

                  {show && <Button onClick={(() => { handelChekout(); handleClick() })}>Valider</Button>}
                </Form>
              </DialogContentText>
            </DialogContent>
            <DialogActions>

            </DialogActions>
          </Dialog>
        </>

      )}
    </div>
  );
}





