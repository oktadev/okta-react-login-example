import React from 'react';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Private from './Private';
import { useHistory } from 'react-router';
import { Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-6974382.okta.com/oauth2/default',
  clientId: '0oa2i1po7LTnjRN6S5d6',
  redirectUri: window.location.origin + '/callback'
});

function SecuredApp() {
  const history = useHistory();

  const onAuthRequired = function() {
    history.push('/login')
  }

  return (
    <Security oktaAuth={oktaAuth} onAuthRequired={onAuthRequired} >
      <Header />
      <Route path='/' exact={true} component={Home}/>
      <Route path='/login' exact={true} component={Login}/>
      <SecureRoute path='/private' component={Private}/>
      <Route path='/callback' component={LoginCallback}/>
    </Security>
  );
}

export default SecuredApp;
