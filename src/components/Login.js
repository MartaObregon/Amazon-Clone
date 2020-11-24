import React, {useState} from 'react'
import './login.css'
import {Link} from 'react-router-dom'


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSignin = (e) =>{
        e.preventDefault();

    }

    const handleRegister = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=> setEmail(e.target.value)} ></input>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)}></input>

                    <button type="submit" onClick={handleSignin}className="login_signinButton">Sign in</button>
                </form>

                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Pricaxy Notice, our Cookies Notice and oir Interest-Based Ads Notice.</p>

                <button onClick={handleRegister} className="login_registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
