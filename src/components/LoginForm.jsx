import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validUser: 'Foo',
      validPass: 'Bar',
      inputUser: '',
      inputPass: '',
      loginSuccess: false,
      errors: []
    }
  }

  showValidationErr(element, message) {
    this.setState((prevState) => ( { errors: [...prevState.errors, { element, message }] } ));
  }

  clearValidationErr(element) {
    this.setState((prevState) => {
      let newArr = [];
      for(let err of prevState.errors) {
        if(element !== err.element) {
          newArr.push(err)
        }
      }
      return {errors: newArr};
    });
  }

  onUsernameChange(e) {
    this.setState({ inputUser: e.target.value });
    this.clearValidationErr("username");
  };

  onPasswordChange(e) {
    this.setState({ inputPass: e.target.value });
    this.clearValidationErr("password");
  };

  submitLogin(e) {
    e.preventDefault();
    if(this.state.inputUser !== this.state.validUser) {
      this.showValidationErr("username", "Incorrect Username")
    }
    if(this.state.inputUser === "") {
      this.showValidationErr("username", "Username cannot be empty")
    }
    if(this.state.inputPass !== this.state.validPass) {
      this.showValidationErr("password", "Incorrect Password")
    }
    if(this.state.inputPass === "") {
      this.showValidationErr("password", "Password cannot be empty");
    }
    if(this.state.inputUser === this.state.validUser && this.state.inputPass === this.state.validPass) {
      this.validLogin();
    }
  }

  validLogin() {
    this.setState({ loginSuccess: true })
    this.props.validLogin(this.state.loginSuccess);
  }


  render() {

    let usernameErr = null, passwordErr = null;

    for(let err of this.state.errors) {
      if(err.element === "username") {
        usernameErr = err.message;
      }
      if(err.element === "password") {
        passwordErr = err.message;
      }
    }

    return (
      <div className="inner-container">
        <form onSubmit={this.submitLogin.bind(this)}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className={"login-input " + (usernameErr ? "invalid" : "")}
              onChange={this.onUsernameChange.bind(this)} />
            <small>{ usernameErr ? usernameErr : "" }</small>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={"login-input " + (passwordErr ? "invalid" : "")}
              onChange={this.onPasswordChange.bind(this)} />
            <small>{ passwordErr ? passwordErr : "" }</small>
          </div>

          <button
            type="submit"
            className="submit-button"
            >Submit
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm;
