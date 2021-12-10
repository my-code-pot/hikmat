import React from 'react'
// import "../styles/global.scss"

const NavBar = () => {
    const [isActive, setisActive] = React.useState(false)

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="section sections"></div>
    </nav>
  )
}

export default NavBar
