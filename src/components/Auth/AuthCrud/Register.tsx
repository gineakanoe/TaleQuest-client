import React from 'react';

type RegisterState = {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    sessionToken?: string,
}

class Register extends React.Component<{}, RegisterState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            sessionToken: '',
        }
    }

    handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();

        fetch(`http://localhost:4000/user/register`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: '',
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
                firstName: data.firstName,
                lastName: data.lastName,
                username: data.username,
                email: data.email,
                password: data.pasword,
                sessionToken: data.sessionToken,
            })
            let token = data.sessionToken;
            localStorage.setItem('sessionToken', token);
            // tokenChecker();
        })
        .catch((err) => console.log(`[Error}: ${err}]`))
    }

    render() {
        return(
            <div>
                <form>
                    <h2>Register</h2>
                    <label htmlFor='firstName'>First Name:</label>
                    <br/>
                    <input type='type' id='firstName' value={this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value})} />  
                    <br/>
                    <label htmlFor='lastName'>Last Name:</label>
                    <br/>
                    <input type='type' id='lastName' value={this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})} />  
                    <br/>
                    <label htmlFor='username'>Username:</label>
                    <br/>
                    <input type='type' id='username' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />  
                    <br/>
                    <label htmlFor='email'>Email:</label>
                    <br/>
                    <input type='email' id='email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />  
                    <br/>
                    <label htmlFor='password'>Password:</label>
                    <br/>
                    <input type='password' id='password' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                    <br/>
                    <button type='submit' id='register' onClick={this.handleSubmit}>Register</button>
                </form>

            </div>
        )
    }
}

export default Register;