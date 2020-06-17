import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/detail">Detail</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/#">Link</Link>
            </li>
        </ul>
    )
}

export default Navbar;