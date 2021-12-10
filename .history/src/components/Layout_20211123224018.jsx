import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/global.scss'

const Layout = (props) => {
  return (
    <div class="container">
     

      {props.children}
    </div>
  )
}

export default Layout
