import React from 'react';
import Header from './components/header/Header';
import Feed from './components/feed/Feed';
import Profile from './components/profile/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
          <Route path="/" component={Feed} exact/>
          <Route path="/profile" component={Profile} exact/>
      </div>
    </Router>
   
  );
}

export default App;
