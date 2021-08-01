import React from 'react';
import { NavbarData } from './NavbarData'; 
import {Link} from '@reach/router';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <ul>
        {NavbarData.map((item)=>(
          <li key={item.id} ><Link to={item.path}>{item.title}</Link></li>
        ))}
      </ul>
      
    </nav>
  )
}
