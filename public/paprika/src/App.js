import React from 'react';
import './App.css';
import Login from "./Login";
import Callback from "./Callback";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Uploader from './Uploader';
import Feed from './Feed';
import FourOThree from './403';
import Profile from './Profile';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      memberData: {}
    };
  }
  
  receiveDataFromCallback = (data) => {
    this.setState({memberData: data});
  }

  render = () => {
    return (
      <div className="App">
        <Router basename="/paprika">
          <Route path="/" exact component={Login} />
          <Route path="/403" exact component={FourOThree} />
          <Route path="/feed/" render={(routeProps) => 
            <Feed {...routeProps} data={this.state.memberData}/>
          }/>
          <Route path="/callback/" render={(routeProps) => 
            <Callback {...routeProps} transferDataToApp={this.receiveDataFromCallback}/>
          }/>
          <Route path="/profile/:name" render={(routeProps) => 
            <Profile {...routeProps} data={this.state.memberData}/>
          }/>
          <Route path="/upload/" render={(routeProps) => 
            <Uploader {...routeProps} data={this.state.memberData}/>
          }/>
        </Router>
      </div>
    );
  }
  
}

export default App;
