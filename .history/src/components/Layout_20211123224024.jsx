import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/global.scss'

const Layout = (props) => {
  return (
    <>
     
      {props.children}
    </>
  )
}

export default Layout
