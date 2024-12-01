// logout.js
import React from 'react';
import { googleLogout } from '@react-oauth/google';

function Logout() {
    const onLogout = () => {
        googleLogout();
        window.location.reload(); // Refresh the page after logout
        console.log('Log out successful!');
        alert("Successfully logged out!");
    }

    return (
        <div id="signOutButton">
            <button onClick={onLogout}>
                Logout
            </button>
        </div>
    );
}

export default Logout;
