import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { getStore } from './store';
import './App.css';
import { logger } from './utils';
import TaskList from './TaskList';
import { Login, LoginContext } from './Login'
const log = logger('App');

class App extends Component {
  render() {

    return (
      <Login>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Test App</h1>
            <LoginContext.Consumer>
              {loginService => (
                <React.Fragment>
                  <input value={loginService.state.name} onInput={loginService.handleInput} name="user"/>
                  <input value={loginService.state.password} onInput={loginService.handleInput} name="password"/>
                </React.Fragment>
              )}
            </LoginContext.Consumer>
            
          </header>
          <div className="App-intro">
            <LoginContext.Consumer>
              {loginService => (<button onClick={loginService.handleSubmit}>Submit</button>)}
            </LoginContext.Consumer>
          </div>
        </div>
      </Login>
    );
  }
}

export default App;
