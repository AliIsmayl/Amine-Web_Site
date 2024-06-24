import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import NavAdmin from './NavAdmin'
import { userContext } from '../context/userContext'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'

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
      <ErrorPage />
    )
  }

}

export default LayoutAdmin