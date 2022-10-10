import React from 'react'
import { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

export const ProtectRoute = ({ user }) => {



  return (
    <>
      {user?.isAdmin === true ? <Outlet /> : <Navigate to='/login' />}
    </>
  )


}

