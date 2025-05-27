import React, { useState } from 'react'
import NavigationLink from './NavigationLink';
import { v4 as uuidv4 } from 'uuid';
import SignedIn from './UI/SignedIn';

const NavigationLinkList = ({addClass}) => {
    const [navLinks, setNavLinks] = useState([
        { id: uuidv4(), name: "Dashboard", to: "/" },
        { id: uuidv4(), name: "Bookings", to: "/bookings" },
        { id: uuidv4(), name: "Invoices", to: "/invoices" },
        { id: uuidv4(), name: "Events"  , to: "/events" }
  ]);
  return (
        <ul className={`nav-links ${addClass}`} aria-label="Navigation links">
          <div className="links">
              {navLinks.map(link => (
                <NavigationLink key={link.id} link={link} />
              ))}
          </div>
          <div className="dropdown-divider"></div>
          <li><SignedIn /></li>
          <div className="dropdown-divider"></div>
          <li className="sign-out">
            <a href='#' className='btn-sign-out'>Sign Out</a>
          </li>
        </ul>
  )
}

export default NavigationLinkList