import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Private from './Private';
import { Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { useHistory } from 'react-router-dom';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-9323263.okta.com/oauth2/default',
  clientId: '0oafhhdgdhMDvqaQW5d6',
  redirectUri: window.location.origin + '/callback'
});

const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };
  const onAuthRequired = function() {
    history.push('/login')
  }

  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <Security oktaAuth={oktaAuth}
                    restoreOriginalUri={restoreOriginalUri}
                    onAuthRequired={onAuthRequired}>
            <Header/>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/login' exact={true} component={Login}/>
            <SecureRoute path='/private' exact={true} component={Private}/>
            <Route path='/callback' component={LoginCallback}/>
          </Security>
        </div>
      </div>
    </div>
  );
}

export default App;
