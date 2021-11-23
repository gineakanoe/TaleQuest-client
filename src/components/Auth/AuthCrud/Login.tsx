import React from 'react';

type LoginState = {
    username: string,
    password: string,
    sessionToken?: string,
}

class Login extends React.Component<{}, LoginState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            username: '',
            password: '',
            sessionToken: '',
        }
    }

    handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log('Login Submitted!')

        fetch(`https://localhost:4000/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    password: '',
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                username: data.username,
                password: data.pasword,
                sessionToken: data.sessionToken,
            })
            let token = data.sessionToken;
            localStorage.setItem('sessionToken', token);
            // tokenChecker();
        })
        .catch((err) => console.log(`[Error]: ${err}`))
    }

    render() {
        return(
            <div>
                <form>
                    <h2>Login</h2>
                    <label htmlFor='username'>Username:</label>
                    <br/>
                    <input type='type' id='username' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />  
                    <br/>
                    <label htmlFor='password'>Password:</label>
                    <br/>
                    <input type='password' id='password' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                    <br/>
                    <button type='submit' id='login' onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;