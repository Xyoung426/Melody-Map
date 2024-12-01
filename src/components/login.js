// login.js
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const onSuccess = (credentialResponse) => {
        console.log('LOGIN SUCCESS:', credentialResponse);
        setIsLoggedIn(true);
        setUser(credentialResponse);
        // You can decode the credential response to get user information
        alert("Successfully logged in!");
    }

    const onError = () => {
        console.log('LOGIN FAILED');
        alert("Login Failed! Please try again.");
    }

    return (
        <div id="signInButton">
            <h2>Sign in with Google</h2>
            {!isLoggedIn ? (
                <GoogleLogin
                    onSuccess={onSuccess}
                    onError={onError}
                    useOneTap={false}
                />
            ) : (
                <div>
                    <p>Welcome! You are logged in.</p>
                    <p>User ID: {user?.credential}</p>
                </div>
            )}
        </div>
    );
}

export default Login;