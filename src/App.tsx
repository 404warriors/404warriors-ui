import React from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator, SignUpConfig, SignInProps, UsernameAttribute } from 'amplify-material-ui';

import awsconfig from './aws-exports';
import logo from './logo.svg';
import './App.css';

const signUpConfig: SignUpConfig = {
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'email',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
  ],
  initialValues:{}
};
Amplify.configure(awsconfig);

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default withAuthenticator(App, {signUpConfig, usernameAttribute: UsernameAttribute.EMAIL});
