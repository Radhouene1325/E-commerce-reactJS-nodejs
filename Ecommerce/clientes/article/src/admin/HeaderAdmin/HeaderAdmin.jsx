import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Navigate, useNavigate } from 'react-router-dom';
import { deleteToken, filterCin, loginInformation } from '../../features/counter/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LogoutIcon from '@mui/icons-material/Logout';
import Groups2Icon from '@mui/icons-material/Groups2';
import BallotIcon from '@mui/icons-material/Ballot';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
 import { mobile } from "../../user/responsive"
import { Search } from '@material-ui/icons';
import { Input } from '../../user/InscriptionUser/styleInscription';
import { SearchContainer } from '../../user/header/styleHeader';


import { useState } from 'react';
import { useEffect } from 'react';
import SearchAppBar from './serchHider';


const drawerWidth = 200;

















export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export  const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft(props) {
     const navigate=useNavigate()
   const theme = useTheme();


const dispatch=useDispatch()
  const logOut = () => {

    dispatch(deleteToken())
  }
 

  const{open,handleDrawerOpen,handleDrawerClose}=props

const index=[
  {navigate:'/admin',title:"Home",icon:(<AccountBalanceIcon />)},
  {navigate:'/admin/create',title:"Article",icon:(<InboxIcon />)},
  {navigate:'/admin/category',title:"Category",icon:<BallotIcon />},
  {navigate:'/admin/Clients==name/cin/telephone/adress',title:"Clients",icon:<Groups2Icon />},
  {navigate:'/admin/create===newAdmin',title:"New Admin",icon:<AdminPanelSettingsIcon/>},
    
]
const userlog = useSelector(loginInformation)
console.log(userlog)

const serch={dispatch,filterCin,index}

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          
          <SearchAppBar serchcin={serch}  />
           
         </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        >
        {userlog.name}
        <DrawerHeader>
          
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List disablePadding>
        

          
          {index.map((item) => (
            <ListItem  >
              <ListItemButton  onClick={(()=>{   navigate(item.navigate)})}  >
                <ListItemIcon>
                  {item.icon}
                {item.title}
               
                </ListItemIcon>
                <ListItemText title={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
          
        </List>
        <Divider />
        <List > 
        <ListItemButton onClick={logOut} >
        <LogoutIcon /> LogOut
        </ListItemButton>
          {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
        </List>
      </Drawer>
     
    </Box>
  );
}


//  <Main open={open}>
// <DrawerHeader />
// <Typography paragraph>
  
// </Typography>
// <Typography paragraph>
 
// </Typography>
// </Main> 


// import React from 'react'
// import { Badge } from "@material-ui/core";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
// import styled from "styled-components";
// import { mobile } from "../../user/responsive"
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import persistStore from 'redux-persist/es/persistStore';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteToken, filterCin, logintoken } from '../../features/counter/productSlice';
// const Container = styled.div`
//   height: 60px;
//   ${mobile({ height: "50px" })}
// `;

// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ padding: "10px 0px" })}
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;

// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "50px" })}
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: center;
// `;

// const Logo = styled.h1`
//   font-weight: bold;
//   ${mobile({ fontSize: "24px" })}
// `;
// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   ${mobile({ flex: 2, justifyContent: "center" })}
// `;

// const MenuItem = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 25px;
//   ${mobile({ fontSize: "12px", marginLeft: "10px" })}
// `;

// const HeaderAdmin = () => {
//   const dispatch = useDispatch()
//   const [nav, setNav] = useState()

//   const navigate = useNavigate()
//   const logOut = () => {

//     dispatch(deleteToken())
//   }
  


//   return (
//     <Container>
//       <Wrapper>
//         <Left>
//           <Language>EN</Language>

//           <SearchContainer>
//             <Input placeholder="Search" onChange={((e)=>{dispatch(filterCin(e.target.value))})}  />
//             <Search style={{ color: "gray", fontSize: 16 }} />
//           </SearchContainer>

//         </Left>
//         <Center>
//           <Logo onClick={(()=>{navigate('/admin/home')})} >LAMA.</Logo>
//         </Center>
//         <Right>
//           <MenuItem onClick={(() => { navigate('/admin/Clients==name/cin/telephone/adress') })}>Clientes</MenuItem>
//           <MenuItem onClick={(() => { navigate('/admin/create') })}>NEWITEM</MenuItem>
//           <MenuItem onClick={(() => { navigate('/admin/category') })}>CATEGORY</MenuItem>
//           <MenuItem onClick={(() => { logOut() })} >logOut</MenuItem>

//           <MenuItem>
//             <Badge badgeContent={4} color="primary">
//               <ShoppingCartOutlined />
//             </Badge>
//           </MenuItem>
//         </Right>
//       </Wrapper>
//     </Container>
//   )
// }

// export default HeaderAdmin


