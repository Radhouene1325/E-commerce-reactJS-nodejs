import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const RoutePublic = ({user}) => {
    if (user.isAdmin===false || !user.isAdmin ) {
        return  <Outlet />
      }
       return <Navigate to='/admin'/>
}

