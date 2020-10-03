import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import EventTasks from './components/EventTasks/EventTasks';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState({ name: '', email: '' })
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/register/:title">
            <Register />
          </Route>
          <Route path='/events'>
            <EventTasks />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
