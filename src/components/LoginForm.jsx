import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validUser: 'Foo',
      validPass: 'Bar',
      inputUser: '',
      inputPass: '',
      errors: []
    }
  }



  onUsernameChange(e) {
    this.setState({ inputUser: e.target.value });
  };

  onPasswordChange(e) {
    this.setState({ inputPass: e.target.value });
  };


  render() {


    return (
      <div className="inner-container">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className={"login-input"}
            onChange={this.onUsernameChange.bind(this)} />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={"login-input"}
            onChange={this.onPasswordChange.bind(this)} />
        </div>

        <button
          type="submit"
          className="submit-button"
          >Submit
        </button>
      </div>
    )
  }
}

export default LoginForm;
