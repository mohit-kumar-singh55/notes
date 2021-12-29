import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper blue">
                <Link to="/" className="brand-logo">MKS</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                    <button className="btn blue">Logout</button>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
