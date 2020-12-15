import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Private from './Private';
import { BrowserRouter, Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-6974382.okta.com/oauth2/default',
  clientId: '0oa2i1po7LTnjRN6S5d6',
  redirectUri: window.location.origin + '/callback'
});

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <BrowserRouter>
            <Security oktaAuth={oktaAuth}>
              <Header/>
              <Route path='/' exact={true} component={Home}/>
              <SecureRoute path='/private' exact={true} component={Private}/>
              <Route path='/callback' component={LoginCallback}/>
            </Security>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
