import React from 'react'
import {Navbar from './Navbar'
import '../styles/global.scss'

const Layout = (props) => {
  return (
    <>
        <Navbar />
      {props.children}
    </>
  )
}

export default Layout
