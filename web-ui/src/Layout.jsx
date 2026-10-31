import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
    
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}
