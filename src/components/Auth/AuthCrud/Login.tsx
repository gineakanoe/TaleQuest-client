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
        }
    }

    handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();

        //? Do I need this?
        // const reqBody = {                
        //     username: username,
        //     password: password,
        // }


        fetch(`https://localhost:4000/user/login`, {method: 'POST'})
        .then(res => res.json())
        .then(data => {
            this.setState({
                username: data.username,
                password: data.pasword,
                sessionToken: data.sessionToken,
            })
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