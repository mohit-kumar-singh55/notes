import React, { useState } from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            // toest from Materialized
            window.M.toast({ html: `Welcome ${result.user.email}`, classes: 'rounded blue' });

            navigate("/");
        }
        catch (error) {
            window.M.toast({ html: error.message, classes: 'rounded red' });
        }
    }

    return (
        <div className="center container">
            <h2>SignUp</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-field col s6">
                    <input type="email" placeholder="email" onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" placeholder="password" onChange={(e) => { setpassword(e.target.value) }} />
                </div>
                <button type='submit' className='btn blue'>SignUp</button>
            </form>
        </div>
    )
}

export default SignUp
