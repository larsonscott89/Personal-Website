import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import '../styles/Nav.css'

export default function Nav() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  useEffect(() => {
    const closeSidebar = () => {
      setSidebar(false)
    }

    if (sidebar) {
      document.addEventListener('click', closeSidebar)
    } else {
      document.removeEventListener('click', closeSidebar)
    }

    return () => {
      document.removeEventListener('click', closeSidebar)
    }
  }, [sidebar])

  const handleMenuBarsClick = (e) => {
    e.stopPropagation() // Prevent click event propagation
    showSidebar()
  }

  return (
    <div className='navbar'>
      <Link to='#' className='menu-bars' onClick={handleMenuBarsClick}>
        <FaIcons.FaBars />
      </Link>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to='#' className='close-button' onClick={() => setSidebar(false)}>
              <AiIcons.AiOutlineClose />
            </Link>
            <Link to='/' className='nav-text'>
              Home
            </Link>
            <Link to='/aboutme' className='nav-text'>
              About Me
            </Link>
            <Link to='/projects' className='nav-text'>
              Projects
            </Link>
            <Link to='/contactme' className='nav-text'>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
