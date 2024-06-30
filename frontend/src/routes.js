import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import AddContent from './components/Content/AddContent';
import ContentList from './components/Content/ContentList';
import Navbar from './components/Navbar';
import AuthProvider from './context/AuthContext';
// src/routes.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/add-content" component={AddContent} />
      <Route path="/content-list" component={ContentList} />
    </Routes>
  </Router>
);
