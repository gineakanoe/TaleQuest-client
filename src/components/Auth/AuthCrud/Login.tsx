import React from 'react';
import APIURL from '../../../helpers/environment';

type LoginState = {
    username: string,
    password: string,
    // role: string,
}

type SessionProps = {
    updateLocalStorage: (newToken: string) => void,
    // updateRole: (role: string) => void,
    clearLocalStorage: () => void,
}

class Login extends React.Component<SessionProps, LoginState> {

    constructor(props: SessionProps) {
        super(props)
        this.state = {
            username: '',
            password: '',
            // role: 'User',
        }
    }

    handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log('Login Submitted!')

        fetch(`${APIURL}/user/login`, {
        // fetch(`http://localhost:4000/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password,
                    // role: this.state.role,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })   
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.props.updateLocalStorage(data.sessionToken)
            
            // if(data.user.role !== undefined) {
            //     this.props.updateRole(data.user.role)
            // }

        })
        .catch((err) =>{
            console.log(`[Error]: ${err}`);
            this.props.clearLocalStorage();
        })
    }

    render() {
        return(
            <div>
                <form>
                    <h2>Login</h2>
                    <label htmlFor='username'>Username:</label>
                    <br/>
                    <input type='type' id='usernameLogin' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} required/>  
                    <br/>
                    <label htmlFor='password'>Password:</label>
                    <br/>
                    <input type='password' id='passwordLogin' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} required/>
                    <br/>
                    <button type='submit' id='login' onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;