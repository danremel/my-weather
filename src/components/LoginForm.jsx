import React from 'react'
import { Route, Redirect} from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(e) {
    switch(e.target.name) {
      case "username":
        this.setState({ inputUser: e.target.value });
        break;
      case "password":
        this.setState({ inputPass: e.target.value });
        break;
      default:
        break;
    };
    this.clearValidationErr(e.target.name);
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
      <div>
        <div className="hint">
          <p><strong>Hint:</strong></p>
          <p>Username: Foo</p>
          <p>Password: Bar</p>
        </div>
        <div className="inner-container">
          <form onSubmit={(e) => this.submitLogin(e)}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                className={"form-input " + (usernameErr ? "invalid" : "")}
                onChange={this.handleChange} />
              <small>{ usernameErr ? usernameErr : "" }</small>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                className={"form-input " + (passwordErr ? "invalid" : "")}
                onChange={this.handleChange} />
              <small>{ passwordErr ? passwordErr : "" }</small>
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;
