import React from 'react';
import './App.css';
import SecuredApp from './SecuredApp';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <Router>
            <SecuredApp/>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
