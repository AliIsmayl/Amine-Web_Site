import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import NavAdmin from './NavAdmin'

const LayoutAdmin = () => {
  return (
    <>
    <NavAdmin/>
    <Outlet/>
    <Toaster />
    </>
  )
}

export default LayoutAdmin