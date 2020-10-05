import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import Admin from './components/Admin/Admin';
import EventTasks from './components/EventTasks/EventTasks';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState({ name: '', email: '' })
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path="/register/:title">
            <Register />
          </PrivateRoute>
          <PrivateRoute path='/events'>
            <EventTasks />
          </PrivateRoute>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
