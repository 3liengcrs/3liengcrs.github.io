import React from 'react'
import { Link } from "react-router-dom";
import './index.css'


const Header = () => {
  return (
    <div className="header-">
            <div className='logo'>
                <Link  to="/"> Movies</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link  to="/"> Movies List</Link>
                </li>
                <li>
                    <Link to = "/watched"> Watched</Link>
                </li>
                <li>
                    <Link to = "/add" className='btn'>add</Link>
                </li>
            </ul>
    </div>
    
  )
}

export default Header