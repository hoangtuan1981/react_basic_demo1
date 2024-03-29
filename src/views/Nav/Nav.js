import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './Nav.css';
/* This is top menu navigation 
Implement 2 components: function component and class component.
*/


/*
Using function:
const Nav = () => {
  return (
    <>
      <div className='topnav'>
        <Link to='/' className='active'>Home</Link>
        <Link to='/todo'>To Do</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <Outlet />
    </>
  )
}
*/

class Nav extends React.Component {

  render() {
    return (
      <nav>
        <div className='topnav'>
          <div className='column'>
            {/*using Link
            <Link to='/'>Home</Link>
            <Link to='/todo'>To Do</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link> 
            <Link to='/'>Log out</Link>*/}
            <NavLink to='/home' activeclassname="active" exact="true">Home</NavLink>
            <NavLink to='/todo' activeclassname="active">To Do</NavLink>
            <NavLink to='/user' activeclassname="active">User manager</NavLink>
            <NavLink to='/about' activeclassname="active">About</NavLink>
            <NavLink to='/contact' activeclassname="active">Contact</NavLink>
          </div>

          <div className='column'>
            <NavLink to='/' activeclassname="active" className='nav_logout'>Log out</NavLink>
          </div>

        </div>
      </nav>
    )

  }
}

export default Nav;
