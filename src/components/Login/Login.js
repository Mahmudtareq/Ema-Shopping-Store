import React from 'react';
import './Login.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    // const { user, signInUsingGoogle } = useFirebase();
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)

            })

    }


    return (
        <div className="login-form p-3">
            <div>
                <h2>Login </h2>
                <form>
                    <input type="email" name="" id="" placeholder="Enter your Email" />
                    <br />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <br />
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
                <p>New to ema-john website <Link to="/register">Create Account</Link></p>
                <div>
                    --------------------------or---------
                </div>
                <button
                    // onClick={signInUsingGoogle}
                    onClick={handleGoogleLogin}
                    className="btn btn-info">Google Sign In</button>


            </div>
        </div>
    );
};

export default Login;