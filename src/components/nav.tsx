// import React from 'react'
// import { Link } from 'react-router-dom'
// import "./nav.css"

// export const Navabar=()=>{
//     return(
//         <nav>
//             <Link to='/'>Home</Link>
//             <Link to='about'>About</Link>
//         </nav>
//     )
// }

// The above code is implemented without using the css

import React from 'react';
import { NavLink} from 'react-router-dom';
import './nav.css';

export const NavBar = () => {
    const navlinkStyles = ({ isActive }: { isActive: boolean }): React.CSSProperties => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        };
    };

    return (
        <nav className='primary-nav'>
            <NavLink style={navlinkStyles} to='/'>
                Home
            </NavLink>
            <NavLink style={navlinkStyles} to='about'>
                About
            </NavLink>
            <NavLink style={navlinkStyles} to='products'>
                Products
            </NavLink>
        </nav>
    );
};
