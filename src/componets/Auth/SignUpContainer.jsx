import React from 'react';
import { withRouter } from 'react-router';
import { signUp } from '../../redux/actions/profile';
import SignUp from './SignUp';

function SignUpContainer({ history }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(event, history);
  };
  return <SignUp onSubmit={handleSubmit} />;
}

export default withRouter(SignUpContainer);
