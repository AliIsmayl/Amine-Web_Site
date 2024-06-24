import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import NavAdmin from './NavAdmin'
import { userContext } from '../context/userContext'

const LayoutAdmin = () => {
  const { user } = useContext(userContext)
  const navigate = useNavigate();
  console.log("user:", user);
  if (user && user.isAdmin === true) {
    return (
      <>
        <NavAdmin />
        <Outlet />
        <Toaster />
      </>
    )
  } else {
    return (
      <>
        errorrrrr page yarata
      </>
    )
  }

}

export default LayoutAdmin