import React from 'react';
import './App.css';
import {BrowserRouter as Router,Link,NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';

function App() {
  const user = ({match}) => {
    return <h1>Hai User {match.params.username}</h1>
  }
  return (
    <div className="App">
      
      <Router>
      <ul>
          <li><NavLink to="/" activeStyle = {
            {color: 'green'}
          }>Home</NavLink></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <Route path = "/" exact render = {
          () => {
            return <h1>Hallo World</h1>
          }
        } /> 
        <Route path="/about" exact strict render = {
          () => {
            return <h1>About</h1>
          }
        } />
        <Route path="/user/:username" exact strict component={user} />

      </Router>
      <Router>
        
      </Router>

    </div>
  );
}

export default App;
