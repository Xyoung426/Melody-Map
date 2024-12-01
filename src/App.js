// App.js
import React from 'react';
import './App.css';
import Login from './components/login';
import Logout from './components/logout';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientID = "111408944834-ld0nlccs1qg29mvae5p8kf8758msp490.apps.googleusercontent.com";

function App() {
    return (
        <GoogleOAuthProvider clientId={clientID}>
            <div className="App" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                marginTop: '20px'
            }}>
                <Login />
                <Logout />
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;
