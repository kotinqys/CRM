import React from 'react';
import { Field, reduxForm } from 'redux-form';

function Auth(props) {
  return (
    <div className='auth'>
      <div className='auth__body'>
        <h2>Авторизация</h2>
        <form action=''>
          <label>
            Email
            <Field name='email' component='input' type='text' placeholder='Email' />
          </label>
          <label>
            Password
            <Field name='password' component='input' type='password' placeholder='Password' />
          </label>
        </form>
      </div>
    </div>
  );
}
const AuthForm = reduxForm({
  form: 'auth',
})(Auth);

export default AuthForm;
