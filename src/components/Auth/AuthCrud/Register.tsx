import React from 'react';

type RegisterState = {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    confirmPassword: string,        //! Don't forget to add!
    // role: string,
}

type SessionProps = {
    updateLocalStorage: (newToken: string) => void,
    // updateRole: (role: string) => void,
    clearLocalStorage: () => void,
}

class Register extends React.Component<SessionProps, RegisterState> {

    constructor(props: SessionProps) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',        //! Don't forget to add!
            // role: 'User',
        }
    }

    handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log('Register Submitted!')

        fetch(`http://localhost:4000/user/register`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword,          //! Don't forget to add!  
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
        .catch((err) => {
            console.log(`[Error}: ${err}]`);
            this.props.clearLocalStorage();
        })
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
                    <label htmlFor='confirmPassword'>Confirm Password:</label>
                    <br/>
                    <input type='password' id='confirmPassword' value={this.state.confirmPassword} onChange={(e) => this.setState({confirmPassword: e.target.value})} />
                    <br/>
                    <button type='submit' id='register' onClick={this.handleSubmit}>Register</button>
                </form>

            </div>
        )
    }
}

export default Register;