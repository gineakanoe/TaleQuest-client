import React from 'react';
import './auth.css';
import Login from './AuthCrud/Login';
import Logout from './AuthCrud/Logout';
import Register from './AuthCrud/Register';

class Auth extends React.Component {

    render() {
        return(
            <div>
                <Login />
                
                <Logout />

                <Register />

            </div>
        )
    }
}

export default Auth;