import React from 'react'
// import { ReactDOM } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll"
import {HashLink} from 'react-router-hash-link'

export default function Navigation() {
  return (
    <div>
      <nav >
        <ul>
          <ls>
            <Link to="/">Home</Link>
          </ls>
          <ls>
            <Link to="/about">About</Link>
          </ls>
          <ls>
            <Link to="/product">Product</Link>
          </ls>
        </ul>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="about" >About</NavLink>
        <NavLink to="product" >Product</NavLink>
        
      </nav>
{/* <Outlet/> */}
      <AnchorLink href='/'>Hrome</AnchorLink>
      <AnchorLink href='about'>About</AnchorLink>

      <HashLink to='/'>Home</HashLink>
      <HashLink to='about'>About</HashLink>
    </div>
  )
}
