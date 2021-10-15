import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form p-2">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter your email" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter your password" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-Enter your password" />
                    <br />
                    <br />
                    <input className="btn btn-secondary" type="submit" value="Submit" />
                </form>
                <p>Already have an account ? <Link to="/login">Login</Link></p>
                <div>--------------- or ------------</div>
                <button className="btn btn-primary">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;