import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import EventTasks from './components/EventTasks/EventTasks';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/events/:title">
          <EventTasks />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
