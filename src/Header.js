import React from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

function Header() {
  const { oktaAuth, authState } = useOktaAuth();

  const login = () => { oktaAuth.signInWithRedirect(); }
  const logout = () => { oktaAuth.signOut(); }

  const userText = authState.isAuthenticated
    ? <button onClick={ logout }>Logout</button>
    : <button onClick={ login }>Sign In</button>;

  return (
    <header>
      <div>React Login</div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/private">Private</Link></li>
      </ul>
      {userText}
    </header>
  );
}

export default Header;
