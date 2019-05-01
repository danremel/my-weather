import React from 'react';
import LoginForm from './components/LoginForm';
import LocationForm from './components/LocationForm';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  loginSuccess(response) {
    this.setState({ isLoggedIn: response });
  };

  render() {

    return (
      <div className="App">
        <div className="login-container">
          <div>
            <p>Username: Foo</p>
            <p>Password: Bar</p>
          </div>
          { !this.state.isLoggedIn && <LoginForm validLogin={this.loginSuccess.bind(this)}/> }
        </div>

        <div>
          { this.state.isLoggedIn && <LocationForm />}
        </div>

      </div>
    );
  }
}

export default App;
