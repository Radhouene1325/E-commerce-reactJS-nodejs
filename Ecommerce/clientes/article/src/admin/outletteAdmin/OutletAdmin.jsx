import Typography from '@mui/material/Typography';
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import FooterAdmin from '../FouterAdmin/FooterAdmin'
import PersistentDrawerLeft, { DrawerHeader, Main } from '../HeaderAdmin/HeaderAdmin'
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin'


import './out.css'

const OutletAdmin = () => {
  const navigate = useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <PersistentDrawerLeft open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />

      <Main open={open}>
        <DrawerHeader />
      <div className='tab'>

          <Outlet />
      </div>

       
       
      </Main>
      <FooterAdmin />

    </div >
  )
}

export default OutletAdmin