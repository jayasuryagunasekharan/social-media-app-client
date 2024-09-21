import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" element={<Home />} />
          <AuthRoute exact path="/login" element={<Login />} />
          <AuthRoute exact path="/register" element={<Register />} />
          <Route exact path="/posts/:postId" element={<SinglePost />} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
