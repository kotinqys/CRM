import React from 'react';
import { withRouter } from 'react-router';
import app from '../../firebase';
import { signUp } from '../../redux/actions/profile';
import SignUp from './SignUp';

function SignUpContainer({ history }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    signUp(event, history);
  };
  return <SignUp onSubmit={handleSubmit} />;
}

export default withRouter(SignUpContainer);
