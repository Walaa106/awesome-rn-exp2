import React from 'react';
import { Item, Input, Toast, Form, Label } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import Login from '../../screens/Login';

const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined;

class LoginForm extends React.Component {
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <Item error={error && touched}>
        <Input
          ref={c => (this.textInput = c)}
          secureTextEntry={input.name === 'password' ? true : false}
          {...input}
        />
      </Item>
    );
  }

  login() {
    if (this.props.valid) {
      this.props.navigation.navigate('Drawer');
    } else {
      Toast.show({
        text: 'Enter Valid Username & password!',
        duration: 2000,
        type: 'danger',
        position: 'bottom',
        textStyle: { textAlign: 'center' },
      });
    }
  }

  render() {
    const form = (
      <Form>
        <Item stackedLabel>
          <Label style={{color: '#fff'}}> Email </Label>
          <Field name="email" component={this.renderInput} validate={[email, required]} />
        </Item>
        <Item stackedLabel last>
          <Label style={{color: '#fff'}}> PASSWORD </Label>
          <Field
            name="password"
            component={this.renderInput}
            validate={[alphaNumeric, minLength8, maxLength15, required]}
          />
        </Item>
      </Form>
    );
    return (
      <Login navigation={this.props.navigation} loginForm={form} onLogin={() => this.login()} />
    );
  }
}

const LoginContainer = reduxForm({
  form: 'login',
})(LoginForm);

export default LoginContainer;
