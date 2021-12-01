import React from 'react';
import { Button } from 'reactstrap';
import './auth.css';
import Login from './AuthCrud/Login';
import Register from './AuthCrud/Register';

type SessionProps = {
    updateLocalStorage: (newToken: string) => void,
    // updateRole: (role: string) => void,
    clearLocalStorage: () => void,
}

type loginToggle = {
    login: boolean,
}

class Auth extends React.Component<SessionProps, loginToggle> {
    constructor(props: SessionProps) {
        super(props)
        this.state = {
            login: false,
        }
    }
    render() {
        return(
            <div>
                <Button onClick={() => this.setState({login: !this.state.login})}>Login/Register</Button>
                {this.state.login ? 
                    (<Register /*updateRole={this.props.updateRole}*/ updateLocalStorage={this.props.updateLocalStorage} clearLocalStorage={this.props.clearLocalStorage} />) :
                    (<Login /*updateRole={this.props.updateRole}*/ updateLocalStorage={this.props.updateLocalStorage} clearLocalStorage={this.props.clearLocalStorage} />)
                }  
            </div>
        )
    }
}

export default Auth;