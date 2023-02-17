import React from 'react';
import { NavLink } from 'react-router-dom';
import NewUserForm from './NewUserForm.js';

function Header ({users}) {
    // const handleClick = 
    return (
        <div className="Header">
            <div className="header">
                {/* <img alt="welcome_img" src=""></img> */}
                <img className='background_img' alt='background_img' src='https://media.istockphoto.com/id/136546200/vector/golf-grunge-background.jpg?s=612x612&w=0&k=20&c=Q13lUna2_UcgTGQpTc628vydJCETLdqsC7ae97JtJ88=/'/>
                <NavLink to='/home-page' className='homePageButton'>
                    Golf Course Finder
                </NavLink>
                {/* <NewUserForm /> */}
            </div>  
        </div>
    )
}

export default Header;