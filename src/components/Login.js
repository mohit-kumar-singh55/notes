import React,{useState} from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email,password);
    }

    return (
        <div className="center container">
            <h2>Login</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-field col s6">
                    <input type="email" placeholder="email" onChange={(e) =>{setEmail(e.target.value)}} />
                    <input type="password" placeholder="password" onChange={(e) =>{setpassword(e.target.value)}} />
                </div>
                <button type='submit' className='btn blue'>Login</button>
            </form>
        </div>
    )
}

export default Login
