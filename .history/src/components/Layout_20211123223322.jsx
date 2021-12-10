import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/global.scss'

const Layout = (props) => {
  return (
      
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2 class="title is-2">Level 2 heading</h2>
          <p class="content">Cool content. Using Bulma!</p>
        </div>

        <div class="column is-four-fifths">
          <h2 class="title is-2">Level 2 heading</h2>
          <p class="content">This column is cool too!</p>
        </div>
      </div>

      <div class="buttons">
        <button class="button is-info">Info</button>
        <button class="button is-success">Success</button>
        <button class="button is-warning">Warning</button>
        <button class="button is-danger">Danger</button>
      </div>

      {props.children}
    </div>
  )
}

export default Layout
