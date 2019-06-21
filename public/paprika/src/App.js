import React from 'react';
import './App.css';
import Login from "./Login";
import Callback from "./Callback";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Uploader from './Uploader';

function App() {
  

  /* 
  
      <header className="App-header">
        <a
          className="App-link"
          href="https://github.com/login/oauth/authorize?client_id=Iv1.ab929d25982c75d7"
        >
          Sign In Using GitHub
        </a>
      </header>
      ;
    </div>
    */
  return (
    
    <div className="App">
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/callback/" component={Callback} />
        <Route path="/upload/" component={Uploader} />
      </Router>
    </div>
  );
}

export default App;
