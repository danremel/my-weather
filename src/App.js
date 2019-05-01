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
      <div className="container">
        { !this.state.isLoggedIn &&
            <LoginForm validLogin={this.loginSuccess.bind(this)}/>
        }

        { this.state.isLoggedIn && <LocationForm /> }

      </div>
    );
  }
}

export default App;
