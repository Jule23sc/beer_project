import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {

    return (
        <div className='nav_div'>
            <Link to="/home">Home</Link>
            <Link to="/beers">View all beers</Link>
            <Link to="/random">View any beer</Link>
        </div>
    )
}
export default Navbar;