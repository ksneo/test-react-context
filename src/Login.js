import React from 'react';

export const LoginContext = React.createContext();

export class Login extends React.Component {
    state = {
        user: '',
        password: '',
    }

    handleInput = (e) => {
        if (e.target.name === 'user') {
            this.setState({user: e.target.value});
        }
        if (e.target.name === 'password') {
            this.setState({password: e.target.value});
        }
    }

    handleSubmit = (e) => {
        console.log(e);
    }

    render() {
        return (
            <LoginContext.Provider value={{state: this.state, handleInput: this.handleInput, handleSubmit: this.handleSubmit}}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}