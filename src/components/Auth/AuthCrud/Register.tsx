import React from 'react';

type RegisterState = {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
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
        }
    }

    handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();

        fetch(`http://localhost:4000/user/register`, {method: 'POST'})
        .then(res => res.json())
        .then(res => {
            this.setState({
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
            })
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
                    <input type='type' id='firstName' value={this.state.firstName} onChange={(e) => (e.target.value)} />  
                    <br/>
                    <label htmlFor='lastName'>Last Name:</label>
                    <br/>
                    <input type='type' id='lastName' value={this.state.lastName} onChange={(e) => (e.target.value)} />  
                    <br/>
                    <label htmlFor='username'>Username:</label>
                    <br/>
                    <input type='type' id='username' value={this.state.username} onChange={(e) => (e.target.value)} />  
                    <br/>
                    <label htmlFor='email'>Email:</label>
                    <br/>
                    <input type='email' id='email' value={this.state.email} onChange={(e) => (e.target.value)} />  
                    <br/>
                    <label htmlFor='password'>Password:</label>
                    <br/>
                    <input type='password' id='password' value={this.state.password} onChange={(e) => (e.target.value)} />
                    <br/>
                    <button type='submit' onClick={this.handleSubmit}>Submit</button>
                </form>

            </div>
        )
    }
}

export default Register;