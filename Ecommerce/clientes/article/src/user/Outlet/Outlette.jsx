import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

const Outlette = () => {

  return (
  <>
  <Header />
      <Outlet />
      <Footer />
  </>
      
   
  )
}

export default Outlette