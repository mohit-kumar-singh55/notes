import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom";

function Navbar(user) {
    const navigate = useNavigate();

    return (
        <nav>
            <div className="nav-wrapper blue">
                <Link to="/" className="brand-logo">MKS</Link>
                <ul id="nav-mobile" className="right">
                    {!user ?
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">SignUp</Link></li>
                        </>
                        :
                        <button className="btn blue" onClick={()=>{
                            signOut(auth);
                            navigate("./login");
                        }}>Logout</button>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
