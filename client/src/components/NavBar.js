import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <NavLink to='/welcome-page'>
            <h1 className='organization'>
                Return to title
            </h1> 
            </NavLink>
                <h1 className='organization'>
                    login
                </h1>
        </div>
    );
}

export default NavBar;