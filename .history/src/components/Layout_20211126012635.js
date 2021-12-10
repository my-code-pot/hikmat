import React from 'react'
import Navbar from './Navbar'
import '../styles/global.scss'

const Layout = (props) => {
  return (
    <>
        <Navbar />
        <span>Load me</span>
      {props.children}
    </>
  )
}

export default Layout
