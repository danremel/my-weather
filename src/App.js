import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        <Router>
          <Switch>
            <Route path="/login" render={(props) => <LoginForm {...props} validLogin={this.loginSuccess.bind(this)}/>} />
            <Route path="/location" component={LocationForm}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
