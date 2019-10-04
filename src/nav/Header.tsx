import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { About } from '../about';

export const Header: React.FC = () => {
  const [aboutVisible, setAboutVisible] = useState(false);
  const showAbout = (e: any) => {
    e.preventDefault();
    setAboutVisible(true);
  };

  return (
    <>
      <ul className='header'>
        <li>
          <NavLink exact={true} to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/dogs'>Dogs</NavLink>
        </li>
        <li>
          <NavLink to='/cats'>Cats</NavLink>
        </li>
        <li>
          <a href='/about' onClick={showAbout}>
            About...
          </a>
        </li>
      </ul>

      <About aboutVisible={aboutVisible} setAboutVisible={setAboutVisible} />
    </>
  );
};
