import React, { PropsWithChildren } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = (props:PropsWithChildren) => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default Layout