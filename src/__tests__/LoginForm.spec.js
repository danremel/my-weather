import React from 'react';
import { create } from 'react-test-renderer';
import LoginForm from '../components/LoginForm';

describe("LoginForm component", () => {
  test("Shows a login form", () => {
    const component = create(<LoginForm validLogin={this.loginSuccess.bind(this)}/>);
    const root = component.root;
    expect(root.findByType("form"));
    const listOfInputs = root.findAllByType("input");
    expect(listOfInputs[0].props.name).toBe("username");
    expect(listOfInputs[1].props.name).toBe("password");
    expect(root.findByType("button").props.type).toBe("submit");
  });

  test("Successful submission", () => {
    const component = create(<LoginForm />);
    const root = component.root;
    const instance = component.getInstance();
    instance.setState({ inputUser: 'Foo', inputPass: 'Bar' });
    const form = root.findByType("form");
    form.props.onSubmit();
    expect(instance.state.loginSuccess === true);
  })
});
