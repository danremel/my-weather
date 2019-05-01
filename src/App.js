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

  render() {

    return (
      <div className="App">
        <div className="login-container">
          <div>
            <p>Username: Foo</p>
            <p>Password: Bar</p>
          </div>
          { !this.state.isLoggedIn && <LoginForm /> }
        </div>

        <div>
          {this.state.isLoggedIn && <LocationForm />}
        </div>
      </div>
    );
  }
}

export default App;
