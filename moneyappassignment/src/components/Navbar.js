import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
    <nav className={styles.nav}>
    <div>E-commerce App</div>
    <NavLink to='/'>Products</NavLink>
    <NavLink to='/cart'>Cart</NavLink>
    </nav>
    <hr />
    </>
  )
}

export default Navbar