import React from 'react';
import LoginForm from './components/LoginForm';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        <p>Username: Foo</p>
        <p>Password: Bar</p>
      </div>

      <div className="login-container">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
