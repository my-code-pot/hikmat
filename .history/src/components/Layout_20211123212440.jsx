import React from 'react'
import Navbar from '../components/Navbar'

const Layout = () => {
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <h2 className="title is-2">Level 2 heading</h2>
            <p className="content">Cool content. Using Bulma!</p>
          </div>

          <div className="column is-four-fifths">
            <h2 className="title is-2">Level 2 heading</h2>
            <p className="content">This column is cool too!</p>
          </div>
        </div>

        <div class="buttons">
          <button class="button is-info">Info</button>
          <button class="button is-success">Success</button>
          <button class="button is-warning">Warning</button>
          <button class="button is-danger">Danger</button>
        </div>
      </div>
    )
}

export default Layout
